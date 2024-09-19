import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PopularPosts from "./components/PopularPosts";
import PostCard from "./components/PostCard";
import BlogList from "./components/BlogList";

function App() {
  return (
    <div className="app">
      <Header />
      <PopularPosts />
      <div className="content">
        <BlogList />
        <MainContent />
      </div>
    </div>
  );
}
export default App;
