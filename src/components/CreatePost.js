import "../styles/createPost.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/authContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/blogs",
        { title, content },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;

/*
function CreatePost() {
  return (
    <div className="create-post-form">
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write your post here"></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
*/
