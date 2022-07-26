export default function ArticleCard({ article }) {
  return (
    <div>
      <article>
        <h3>Topic: {article.topic}</h3>
        <p>
          Title: <span className="title">{article.title}</span>
        </p>
        <p>
          Comment_count:
          <span className="comment-count">{article.comment_count}</span>
        </p>
        {/* <p className="description-body">Body: {article.body}</p> */}
        <hr />
      </article>
    </div>
  );
}
