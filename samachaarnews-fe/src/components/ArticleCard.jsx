import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div>
      <article className="articles">
        <h3>Topic: {article.topic}</h3>
        <p>
          Title: <span className="title">{article.title}</span>
        </p>
        <p>
          Comment_count:
          <span className="comment-count"> {article.comment_count}</span>
        </p>
        <p>
          Author:
          <span className="title"> {article.author}</span>
        </p>
        <p>
          Votes:
          <span className="comment-count"> {article.votes}</span>
        </p>
        <Link to={`/articles/articleId/${article.article_id}`}>
          <button>View Article</button>
        </Link>

        {/* <hr /> */}
      </article>
    </div>
  );
}
