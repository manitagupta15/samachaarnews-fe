import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { userNameContext } from "../Context/context";

import { postComment } from "../api";

export default function AddComment({ setComments }) {
  
    const [input, setInput] = useState("");

  const { username } = useContext(userNameContext);
  const { article_id } = useParams();

  const handleComment = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      alert("Please insert comment..");
    } else {
      const newComment = {
        username: username,
        body: input,
      };

      postComment(newComment, article_id).then((comment) => {
        setComments((currentComment) => {
          return [comment, ...currentComment];
        });
      });
    }
  };

  return (
    <section>
      <form onSubmit={handleComment}>
        <label>body</label>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </section>
  );
}
