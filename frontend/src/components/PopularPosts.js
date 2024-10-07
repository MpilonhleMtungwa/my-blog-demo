import React from "react";
import "../styles/popularPosts.css";

function PopularPosts() {
  return (
    <section className="popular-posts">
      <h2>Popular Posts</h2>
      <div className="post-card-container">
        <div className="post-card">
          <h3>Post 1</h3>
          <p>Description of Post 1</p>
        </div>
        <div className="post-card">
          <h3>Post 2</h3>
          <p>Description of Post 2</p>
        </div>
        <div className="post-card">
          <h3>Post 3</h3>
          <p>Description of Post 3</p>
        </div>
      </div>
    </section>
  );
}

export default PopularPosts;
