import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/blogs/user-blogs",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user blogs:", err);
        setError(err.response?.data?.msg || "Error fetching user blogs");
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Your Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <Link to={`/blogs/${blog._id}`}>View</Link>
          <Link to={`/edit/${blog._id}`}>Edit</Link>
          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserBlogs;
