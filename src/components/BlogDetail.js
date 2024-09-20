import React from "react";
import styles from "../styles/blogDetail.module.css"; // Importing CSS Module for styling

const BlogDetail = ({ title, author, date, content }) => {
  return (
    <div className={styles.blogContainer}>
      {/* Title */}
      <h1 className={styles.title}>{title}</h1>

      {/* Author and Date */}
      <div className={styles.authorInfo}>
        <span className={styles.author}>By {author}</span>
        <span className={styles.date}>{date}</span>
      </div>

      {/* Blog Content */}
      <div className={styles.blogContent}>
        {content.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      {/* Interactive Icons */}
      <div className={styles.interactions}>
        <span className={styles.icon}>👍</span>
        <span className={styles.icon}>👎</span>
        <span className={styles.icon}>💬</span>
      </div>
    </div>
  );
};

export default BlogDetail;
