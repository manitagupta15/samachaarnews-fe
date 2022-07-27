import { useEffect, useState } from "react";
import { fetchArticles, fetchArticlesByTopic, sortArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");

  const { topic } = useParams();

  useEffect(() => {
    if (topic === undefined) {
      fetchArticles().then((articles) => {
        setArticles(articles);
      });
    } else {
      fetchArticlesByTopic(topic).then((returnedArticles) => {
        setArticles(returnedArticles);
      });
    }
  }, [topic]);

  useEffect(() => {
    sortArticles(sortBy).then((articles) => {
      setArticles(articles);
    });
  }, [sortBy]);

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
      {/* ------------------------------ */}
      {/* <Link to="/articles/?sort_by=created_at">
        <input type="radio" value="article_id">
          article_id
        </input>
      </Link> */}
      <form
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <label>Sort By:</label>
        <input type="radio" id="sort1" name="sort_by" value="votes" />
        <label htmlFor="sort1">votes</label>
        <input type="radio" id="sort2" name="sort_by" value="article_id" />
        <label htmlFor="sort2">Article Id</label>
        <input type="radio" id="sort3" name="sort_by" value="title" />
        <label htmlFor="sort2">Title</label>
        <input type="radio" id="sort4" name="sort_by" value="topic" />
        <label htmlFor="sort2">Topic</label>
        <input type="radio" id="sort5" name="sort_by" value="author" />
        <label htmlFor="sort2">Author</label>
        <input type="radio" id="sort6" name="sort_by" value="body" />
        <label htmlFor="sort2">Body</label>
      </form>

      {/* ------------------------------ */}
      <hr />
      {topic !== undefined ? (
        <h3 className="topic">Showing All articles retalated to {topic}</h3>
      ) : (
        <h3 className="topic">Showing all the articles:</h3>
      )}
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
