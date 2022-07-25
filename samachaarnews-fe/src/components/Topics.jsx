import { useEffect, useState } from "react";
import { fetchArticles, fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";

export default function Topics() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    if (topic === undefined) {
      fetchArticles().then((articles) => {
        setArticlesByTopic(articles);
      });
    } else {
      fetchArticlesByTopic(topic).then((returnedArticles) => {
        setArticlesByTopic(returnedArticles);
      });
    }
  }, [topic]);

  return (
    <div>
      <hr />
      <h2>Choose a topic to see the related articles:</h2>
      <Link to="/articles">
        <button className="topic-button">⚓All Topics</button>
      </Link>
      <Link to="/articles/coding">
        <button className="topic-button">💻Coding</button>
      </Link>
      <Link to="/articles/football">
        <button className="topic-button">⚽Football</button>
      </Link>
      <Link to="/articles/cooking">
        <button className="topic-button">🍲Cooking</button>
      </Link>
      <hr />
      {articlesByTopic.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
