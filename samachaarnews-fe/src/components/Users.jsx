import { useEffect, useState } from "react";
import { fetchUsers } from "../api";

export default function Users({ username, setUsername }) {
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
          <article key={user.username}>
            <p>Username: {user.username}</p>
          </article>
        );
      })}
    </div>
  );
}
