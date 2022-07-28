import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");
  const [searchParams, setSearchParams] = useSearchParams();

  const { topic } = useParams();

  useEffect(() => {
    searchParams.set("sort_by", sortBy);
    searchParams.set("order", orderBy);
    setSearchParams(searchParams);

    fetchArticles(topic, sortBy, orderBy).then((articles) => {
      setArticles(articles);
    });
  }, [topic, sortBy, searchParams, setSearchParams, orderBy]);

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

      <form
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <label>Sort By:</label>
        <input
          type="radio"
          id="sort7"
          name="sort_by"
          value="created_at"
          defaultChecked
        />
        <label htmlFor="sort2">Date-time</label>
        <input type="radio" id="sort1" name="sort_by" value="votes" />
        <label htmlFor="sort1">votes</label>
        <input type="radio" id="sort3" name="sort_by" value="title" />
        <label htmlFor="sort2">Title</label>
        <input type="radio" id="sort4" name="sort_by" value="topic" />
        <label htmlFor="sort2">Topic</label>
        <input type="radio" id="sort5" name="sort_by" value="author" />
        <label htmlFor="sort2">Author</label>
      </form>

      <form
        onChange={(e) => {
          setOrderBy(e.target.value);
        }}
      >
        <label>Order By:</label>
        <input
          type="radio"
          id="order1"
          name="order_by"
          value="DESC"
          defaultChecked
        />
        <label htmlFor="sort2">Descending</label>
        <input type="radio" id="order2" name="order_by" value="ASC" />
        <label htmlFor="sort2">Ascending</label>
      </form>

      <hr />
      {topic ? (
        <h3 className="topic">Showing All articles related to {topic}</h3>
      ) : (
        <></>
      )}
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
