/*
import React from "react";
import styles from "../styles/blogDetail.module.css"; // Importing CSS Module for styling

const BlogDetail = ({ title, author, date, content }) => {
  return (
    <div className={styles.blogContainer}>
      
      <h1 className={styles.title}>{title}</h1>

     
      <div className={styles.authorInfo}>
        <span className={styles.author}>By {author}</span>
        <span className={styles.date}>{date}</span>
      </div>

     
      <div className={styles.blogContent}>
        {content.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

     
      <div className={styles.interactions}>
        <span className={styles.icon}>👍</span>
        <span className={styles.icon}>👎</span>
        <span className={styles.icon}>💬</span>
      </div>
    </div>
  );
};

export default BlogDetail;
*/

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentSection from "./CommentsForm";
import styles from "../styles/blogDetail.module.css"; // Adjust path to your CSS module

const BlogDetail = ({ match }) => {
  const { id } = useParams(); // Get the blog ID from the URL

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setBlog(response.data); // Set the blog data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching the blog:", err);
        setError(err.response?.data?.msg || "Error fetching the blog");
        setLoading(false);
      }
    };

    fetchBlog();
    console.log("Blog ID:", id);
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.blogContainer}>
      {/* Title */}
      <h1 className={styles.title}>{blog.title}</h1>

      {/* Author and Date */}
      <div className={styles.authorInfo}>
        <span className={styles.author}>By {blog.author}</span>
        <span className={styles.date}>
          {new Date(blog.date).toLocaleDateString()} {/* Format date */}
        </span>
      </div>

      {/* Blog Content */}
      <div className={styles.blogContent}>
        {blog.content.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      {/* Interactive Icons */}
      <div className={styles.interactions}>
        <span className={styles.icon}>👍</span>
        <span className={styles.icon}>👎</span>
        <span className={styles.icon}>💬</span>
      </div>
      <CommentSection postId={id} />
    </div>
  );
};

export default BlogDetail;
