import "../styles/createPost.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(""); // Define image state
  const [author, setAuthor] = useState(""); // Define author state
  const [description, setDescription] = useState(""); // Define description state
  const [message, setMessage] = useState(""); // Define a state for success/error message
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/blogs/add",
        {
          title,
          content,
          author,
          image, // Pass the image URL
          description, // Pass the description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );
      setMessage("Blog post created successfully");
    } catch (err) {
      console.error("Error creating blog post", err);
      setMessage("Failed to create blog post");
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
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      {/* Input for image URL */}
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Input for author */}
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
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
