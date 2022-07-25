import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../api";
import { userNameContext } from "../Context/context";

export default function Users() {
  const { setName } = useContext(userNameContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading users...</p>;

  return (
    <div>
      {users.map((user) => {
        return (
          <article key={user.name}>
            <p>Name: {user.name}</p>
            <img src={user.avatar_url} alt="your avatar"></img>
            <button
              onClick={() => {
                setName(user.name);
                navigate("/topics");
              }}
            >
              Select user
            </button>
            <hr />
          </article>
        );
      })}
    </div>
  );
}
