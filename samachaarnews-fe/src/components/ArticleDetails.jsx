import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { fetchArticleById } from "../api";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(article_id);

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div>
      <p>Article Id: {article.article_id}</p>
      <h2>{article.title}</h2>
      <p className="article-body">{article.body}</p>
      <label>
        Comment_count:{" "}
        <span className="comment-count">{article.comment_count}</span>
      </label>
      <label>
        Votes: <span className="comment-count">{article.votes}</span>
      </label>
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
