import React from "react";
import BlogList from "../components/BlogList";
import "../styles/postCard.css";

const PostCard = ({
  title,
  author,
  date,
  description,
  image,
  authorImage,
  tags,
  site,
}) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <div className="author-info">
          {authorImage && <img src={authorImage} alt={author} />}{" "}
          {/* Conditionally render author image */}
          <p>
            by <strong>{author || "Unknown Author"}</strong> on{" "}
            {new Date(date).toLocaleDateString()} {/* Format date */}
          </p>
        </div>
        <p>{description}</p>
        <a href={site.url} target="_blank" className="read-more">
          Read article →
        </a>
        {tags && tags.length > 0 /* Conditionally render tags */ && (
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/*
function PostCard({ title }) {
  return (
    <div className="blog-card">
      <img src="earth.jpg" alt="Earth from space" />
      <div className="content">
        <h2>Exploring the World's Natural Wonders: A Nature Lover's Journey</h2>
        <div className="author-info">
          <img src="author.jpg" alt="Author" />
          <p>
            by <strong>John Doe</strong> on May 30, 2023
          </p>
        </div>
        <p>
          As someone who loves nature, there's nothing quite like the thrill of
          exploring the world's most beautiful landscapes. From snow-capped
          mountains to crystal-clear waters, there's no shortage of natural
          wonders to discover...
        </p>
        <a href="#" className="read-more">
          Read article →
        </a>
        <div className="tags">
          <span>Environment</span>
          <span>Climate</span>
        </div>
      </div>
    </div>
  );
}
*/
export default PostCard;
