import "../styles/postCard.css";

function PostCard({ title }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      {/* Add other post details here */}
    </div>
  );
}

export default PostCard;
