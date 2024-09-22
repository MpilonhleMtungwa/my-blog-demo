import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogs"); // Now pointing to your backend API
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          author={post.author}
          date={post.createdAt}
          description={post.description}
          image={post.image} // Assuming you store image URLs in your blog post data
        />
      ))}
    </div>
  );
};

/*
  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          author={post.author}
          date={post.createdAt} // Assuming `createdAt` is in your MongoDB schema
          description={post.content} // Assuming `content` is the field for blog content
          image={post.imageUrl} // Assuming `imageUrl` is where you store image links
          tags={post.tags || []} // Assuming `tags` is an array
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
