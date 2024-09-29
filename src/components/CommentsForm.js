import { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ postId }) => {
  const [name, setName] = useState(""); // Name (for guests)
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch comments for the blog post
  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(`/api/comments/${postId}`);
      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  // Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/comments/add", { postId, name, comment });
      setComment(""); // Clear the comment input after submission
      // Optionally refetch comments or push to state
    } catch (error) {
      console.error("Error adding comment", error);
    }
  };

  return (
    <div>
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          value={comment}
          placeholder="Your comment"
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit Comment</button>
      </form>

      <h4>Comments</h4>
      {comments.map((c, index) => (
        <div key={index}>
          <p>
            <strong>{c.name}</strong> commented:
          </p>
          <p>{c.comment}</p>
          <p>{new Date(c.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
