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
import ProtectedRoute from "./components/ProtectedRoute";
import CreatePost from "./components/CreatePost";

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
          <Route path="/register" element={<Register />} />{" "}
          {/* Register page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/blogs" element={<BlogList />} /> {/* List of blogs */}
          <Route path="/blogs/:id" element={<BlogDetail />} />{" "}
          {/* Blog details */}
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />{" "}
          {/* Only accessible if logged in */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
