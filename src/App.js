import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PopularPosts from "./components/PopularPosts";
import PostCard from "./components/PostCard";
import BlogList from "./components/BlogList";
import Login from "./components/Login";
import Register from "./components/Register";
import BlogDetail from "./components/BlogDetail";

const blogContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ligula a justo tempor tempor. 
  In fringilla quam eu massa iaculis elementum. Donec vitae turpis volutpat, blandit magna non, tristique erat. 
  Vestibulum luctus leo id lectus consequat rutrum.
  
  In finibus tellus ac varius lorem. Integer efficitur augue lorem, non aliquet nisi ornare ac. 
  Donec consectetur et purus eget suscipit.
`;

function App() {
  return (
    <div className="app">
      <BlogDetail
        title="The Journey of Web Development"
        author="John Doe"
        date="20 September 2024"
        content={blogContent}
      />

      <div className="content"></div>
    </div>
  );
}
export default App;
