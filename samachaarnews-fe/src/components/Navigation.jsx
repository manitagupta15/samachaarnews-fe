import { Link } from "react-router-dom";
import { useContext } from "react";
import { userNameContext } from "../Context/context";

export default function Navigation() {
  const { name } = useContext(userNameContext);

  return (
    <div>
      <h4>Welcome {name}</h4>
      <nav className="nav-bar">
        <Link to="/articles">&#128269;Topics</Link>
        <Link to="/users">👤Change User</Link>
      </nav>
    </div>
  );
}
