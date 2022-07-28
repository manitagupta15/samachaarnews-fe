import { Link } from "react-router-dom";

export default function ErrorPage({ status, msg }) {
  status = status || "404";
  return (
    <main>
      <h3>
        {status}:{msg || "Looks like you are lost.."}
      </h3>
      <Link to="/articles">Back to Topics page</Link>
    </main>
  );
}
