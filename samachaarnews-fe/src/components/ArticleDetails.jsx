import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { fetchArticleById, patchArticleVotes } from "../api";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(article_id);
  const [votes, setVotes] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
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
      <label>Comment_count: </label>
      <span className="comment-count">{article.comment_count}</span>

      <br></br>
      <label>Votes: </label>
      <button
        className="votes"
        onClick={() => {
          setCount(1);
          setVotes((article.votes += 1));
        }}
      >
        +
      </button>
      <span className="comment-count">{article.votes}</span>

      <button
        className="votes"
        onClick={() => {
          setCount(-1);
          setVotes((article.votes -= 1));
        }}
      >
        -
      </button>
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}
