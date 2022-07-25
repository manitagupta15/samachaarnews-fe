import { useEffect, useState } from "react";
import { fetchArticles } from "../api";

import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticleList(articles);
    });
  }, []);

  return (
    <div>
      <hr />
      <h2>List of all the available articles:</h2>
      {articleList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
