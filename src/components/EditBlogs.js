// src/components/EditBlog.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/authContext";
import styles from "../styles/editBlog.module.css";
const EditBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const { token } = useContext(AuthContext); // Get token from AuthContext
  const [blog, setBlog] = useState({ title: "", content: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.msg || "Error fetching the blog");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/blogs/${id}`,
        { ...blog },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/myblogs"); 
    } catch (err) {
      setError(err.response?.data?.msg || "Error updating the blog");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.editBlogContainer}>
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={blog.description}
          onChange={handleChange}
          required
        />
        <label>Content</label>
        <textarea
          name="content"
          value={blog.content}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
