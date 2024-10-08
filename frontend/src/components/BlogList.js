import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard"; // Import PostCard component

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://my-blog-9i38.onrender.com/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        setError("Error fetching blogs");
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      {error && <p>{error}</p>}
      <div className="blog-cards">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <PostCard
              key={blog._id} // Use blog._id as the key
              id={blog._id} // Pass the blog's _id to the BlogCard component
              title={blog.title}
              image={blog.image}
              author={blog.author}
              authorImage={blog.authorImage}
              date={blog.date}
              description={blog.description}
              tags={blog.tags}
            />
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};


export default BlogList;
