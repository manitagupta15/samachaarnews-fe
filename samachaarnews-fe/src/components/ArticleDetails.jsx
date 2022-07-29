import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userNameContext } from "../Context/context";

import AddComment from "./AddComment";

import {
  fetchArticleById,
  patchArticleVotes,
  fetchComments,
  deleteComment,
} from "../api";
import ErrorPage from "./ErrorPage";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const navigate = useNavigate();

  const { username } = useContext(userNameContext);

  const [article, setArticle] = useState(article_id);
  const [votes, setVotes] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [isPlusChecked, setIsPlusChecked] = useState(false);
  const [buttonText, setButtonText] = useState("👍");
  const [comments, setComments] = useState([]);
  const [deleteCommentStatus, setDeleteCommentStatus] = useState(false);
  const [addCommentClick, setAddCommentClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [commentPost, setCommentPost] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
        setError(null);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        setError({ status: response.status, msg: response.data.msg });
      });

    fetchComments(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
        setError(null);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        setError({ status: response.status, msg: response.data.msg });
      });
  }, [article_id]);

  useEffect(() => {
    patchArticleVotes(article_id, count).catch((err) => {
      setError({ err });
      setVotes(votes - count);
    });
  }, [article_id, count, votes]);

  if (error) {
    return <ErrorPage status={error.status} msg={error.msg} />;
  }

  if (isLoading) return <p>loading details...</p>;

  return (
    <div>
      <p>Article Id: {article.article_id}</p>
      <h2>{article.title}</h2>
      <p className="article-body">{article.body}</p>
      <section className="vote-position">
        <button
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>

        <div>
          <span className="comment-count">
            Comments | {article.comment_count}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setAddCommentClick((currentValue) => !currentValue);
              setCommentPost(false);
              setDeleteCommentStatus(false);
            }}
          >
            Add comment
          </button>
        </div>

        <div>
          {/* <label>Votes: </label>{" "} */}
          <button
            className="votes"
            onClick={() => {
              if (!isPlusChecked) {
                setCount(1);
                setVotes((article.votes += 1));
                setIsPlusChecked(true);
                setButtonText("👎");
              } else {
                setCount(-1);
                setVotes((article.votes -= 1));
                setIsPlusChecked(false);
                setButtonText("👍");
              }
            }}
          >
            {buttonText}
          </button>{" "}
          <span className="comment-count">{article.votes}</span>
        </div>
      </section>

      {deleteCommentStatus ? <p>Comment deleted..</p> : <></>}

      {addCommentClick ? (
        <AddComment
          setComments={setComments}
          setAddCommentClick={setAddCommentClick}
          commentPost={commentPost}
          setCommentPost={setCommentPost}
        />
      ) : (
        <></>
      )}

      {commentPost && !deleteCommentStatus ? <p>Comments Posted...</p> : <></>}

      <br />
      {comments.map((comment) => {
        return (
          <section className="comment" key={comment.comment_id}>
            {username === comment.author ? (
              <div>
                <span className="delete-msg">
                  Would you like to delete this comment
                </span>
                <button
                  className="delete"
                  onClick={() => {
                    deleteComment(comment.comment_id)
                      .then(() => {
                        setDeleteCommentStatus(true);
                        const newComments = comments.filter((com) => {
                          return com.comment_id !== comment.comment_id;
                        });

                        setComments(newComments);
                      })
                      .catch(({ response }) => {
                        setError({
                          status: response.status,
                          msg: response.data.msg,
                        });
                      });
                  }}
                >
                  ❌
                </button>
              </div>
            ) : (
              <></>
            )}{" "}
            <p>{comment.body}</p>
            <p>-by {comment.author}</p>
          </section>
        );
      })}
    </div>
  );
}
