// src/components/MyBlogs.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/authContext"; // Ensure the correct path
import { Link } from "react-router-dom";
import styles from "../styles/myBlogs.module.css"; // Optional CSS module

const MyBlogs = () => {
  const { token } = useContext(AuthContext); // Get token from AuthContext
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/blogs/myblogs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.msg || "Error fetching blogs");
        setLoading(false);
      }
    };

    if (token) {
      fetchMyBlogs();
    }
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.myBlogsContainer}>
      <h1>My Blogs</h1>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id} className={styles.blogItem}>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <Link to={`/blogs/${blog._id}`} className={styles.viewBtn}>
                View
              </Link>
              <Link to={`/editblog/${blog._id}`} className={styles.editBtn}>
                Edit
              </Link>
              <button
                onClick={() => handleDelete(blog._id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't created any blogs yet.</p>
      )}
    </div>
  );
};

const handleDelete = async (blogId) => {
  try {
    await axios.delete(`http://localhost:5000/api/blogs/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Refresh the blog list or remove the deleted blog from the state
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
  } catch (err) {
    console.error("Error deleting blog:", err);
  }
};

export default MyBlogs;
