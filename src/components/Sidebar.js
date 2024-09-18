import "../styles/sidebar.css";
import PostCard from "./PostCard";

function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="popular-posts">
        <h2>popular posts</h2>
        <PostCard title="Post 1" />
        <PostCard title="Post 2" />
      </section>

      <section className="create-post">
        <button>Create Posts</button>
      </section>

      <section className="search-posts">
        <h2>Search Posts</h2>
        <input type="text" placeholder="Search..." />
      </section>
    </aside>
  );
}

export default Sidebar;
