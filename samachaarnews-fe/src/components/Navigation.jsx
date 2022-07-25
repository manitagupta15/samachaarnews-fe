import { Link } from "react-router-dom";
import { useContext } from "react";
import { userNameContext } from "../Context/context";

export default function Navigation() {
  const { username } = useContext(userNameContext);

  return (
    <div>
      <h2>Welcome {username}</h2>
      <hr />
      <nav>
        <Link to="/">Change User</Link>
        <Link to="/articles">Articles</Link>
        {/* <Link to="/topics">Topics</Link> */}
      </nav>
    </div>
  );
}
