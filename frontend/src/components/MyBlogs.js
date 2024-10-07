// src/components/MyBlogs.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/authContext"; 
import { Link } from "react-router-dom";
import styles from "../styles/myBlogs.module.css"; 

const MyBlogs = () => {
  const { token } = useContext(AuthContext); 
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

  const handleDelete = async (blogId) => {
    try {
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await fetch(
        `http://localhost:5000/api/blogs/${blogId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting blog");
      }

      const data = await response.json();
      console.log("Blog deleted successfully", data);
      
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

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

export default MyBlogs;
