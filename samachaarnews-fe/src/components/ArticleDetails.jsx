import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AddComment from "./AddComment";

import { fetchArticleById, patchArticleVotes, fetchComments } from "../api";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(article_id);
  const [votes, setVotes] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [isPlusChecked, setIsPlusChecked] = useState(false);
  const [buttonText, setButtonText] = useState("👍");
  const [comments, setComments] = useState([]);
  const [addCommentClick, setAddCommentClick] = useState(false);

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });

    fetchComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  useEffect(() => {
    patchArticleVotes(article_id, count).catch((err) => {
      setError({ err });
      setVotes(votes - count);
    });
  }, [article_id, count, votes]);

  if (error) {
    return <p>Sorry can't change votes at this time...</p>;
  }

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
          <label>Comments: </label>
          <span className="comment-count">{article.comment_count}</span>
          <button
            onClick={() => {
              setAddCommentClick((currentValue) => !currentValue);
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

      {addCommentClick ? <AddComment setComments={setComments} /> : <></>}
      <br />
      {comments.map((comment) => {
        return (
          <section className="comment" key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>-by {comment.author}</p>
          </section>
        );
      })}
    </div>
  );
}
