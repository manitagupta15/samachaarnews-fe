import { Link } from "react-router-dom";
import { useContext } from "react";
import { userNameContext } from "../Context/context";

export default function Navigation() {
  const { name } = useContext(userNameContext);

  return (
    <div>
      <h4>Welcome {name}</h4>
      <nav className="nav-bar">
        <Link to="/">👤Change User</Link>
        {/* <Link to="/articles">Articles</Link> */}
        <Link to="/topics">Topics</Link>
      </nav>
    </div>
  );
}
