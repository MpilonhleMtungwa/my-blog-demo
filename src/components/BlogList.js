import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard"; // Import PostCard component

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
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

/*
const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to show loading indicator
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=972a58c0da734c67983f569f30bc4177"
        ); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        console.log(data.articles); // Log the articles to see what's inside
        setBlogPosts(data.articles); // Make sure to access the 'articles' array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array to fetch data only once

  if (loading) return <div>Loading...</div>; // Show loading message while fetching data
  if (error) return <div>Error: {error}</div>; // Show error message if there's an error

  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          author={post.author}
          date={post.publishedAt} // 'publishedAt' is the date field in your API
          description={post.description}
          image={post.urlToImage} // 'urlToImage' for the image field
          tags={post.tags || []} // Pass empty array if no tags
          site={post.url}
        />
      ))}
    </div>
  );
};
*/
/*
const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to show loading indicator
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=za&category=technology&apiKey=972a58c0da734c67983f569f30bc4177"
        ); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogPosts(data.articles); // Make sure to access the 'articles' array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array to fetch data only once

  if (loading) return <div>Loading...</div>; // Show loading message while fetching data
  if (error) return <div>Error: {error}</div>; // Show error message if there's an error

  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          author={post.author}
          date={post.publishedAt} // 'publishedAt' is the date field in your API
          description={post.description}
          image={post.urlToImage} // 'urlToImage' for the image field
        />
      ))}
    </div>
  );
};
*/
export default BlogList;
