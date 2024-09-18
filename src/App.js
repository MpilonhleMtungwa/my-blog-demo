import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PopularPosts from "./components/PopularPosts";
import PostCard from "./components/PostCard";

function App() {
  return (
    <div className="app">
      <Header />
      <PopularPosts />
      <div className="content">
        <PostCard />
        <MainContent />
      </div>
    </div>
  );
}
export default App;
