export default function ArticleCard({ article }) {
  return (
    <div>
      <article>
        <hr />
        <h3>Topic: {article.topic}</h3>
        <p>Title: {article.title}</p>
        <p>Comment_count: {article.comment_count}</p>
        <p>Body: {article.body}</p>
      </article>
    </div>
  );
}
