import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PopularPosts from "./components/PopularPosts";
import PostCard from "./components/PostCard";
import BlogList from "./components/BlogList";
import Login from "./components/Login";
import Register from "./components/Register";
import BlogDetail from "./components/BlogDetail";

/*
const blogContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ligula a justo tempor tempor. 
  In fringilla quam eu massa iaculis elementum. Donec vitae turpis volutpat, blandit magna non, tristique erat. 
  Vestibulum luctus leo id lectus consequat rutrum.
  
  In finibus tellus ac varius lorem. Integer efficitur augue lorem, non aliquet nisi ornare ac. 
  Donec consectetur et purus eget suscipit.
`;
*/
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
