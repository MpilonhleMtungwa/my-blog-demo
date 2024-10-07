import "../styles/createPost.css";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/authContext";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);
  const handleCreatePost = async (event) => {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    try {
      const response = await axios.post(
        "http://localhost:5000/api/blogs/create",
        {
          title,
          content,
          image,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token in request headers
          },
        }
      );

      if (response.status === 201) {
        console.log("Blog post created successfully:", response.data);
        setMessage("Blog post created successfully");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      setError("Error creating blog post");
    }
  };

  return (
    <form onSubmit={handleCreatePost}>
      <h2>Create Post</h2>
      {message && <p>{message}</p>}
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

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
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
