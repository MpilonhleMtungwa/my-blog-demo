import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";

import PopularPosts from "./components/PopularPosts";
import PostCard from "./components/PostCard";
import BlogList from "./components/BlogList";
import Login from "./components/Login";
import Register from "./components/Register";
import BlogDetail from "./components/BlogDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import CreatePost from "./components/CreatePost";
import PrivateRoute from "./components/PrivateRoute";
import MyBlogs from "./components/MyBlogs";
import EditBlog from "./components/EditBlogs";

/*
const blogContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ligula a justo tempor tempor. 
  In fringilla quam eu massa iaculis elementum. Donec vitae turpis volutpat, blandit magna non, tristique erat. 
  Vestibulum luctus leo id lectus consequat rutrum.
  
  In finibus tellus ac varius lorem. Integer efficitur augue lorem, non aliquet nisi ornare ac. 
  Donec consectetur et purus eget suscipit.
`;
*/
/*
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />{" "}
         
          <Route path="/login" element={<Login />} /> 
          <Route path="/blogs" element={<BlogList />} /> 
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />{" "}
          
        </Routes>
      </div>
    </Router>
  );
}
export default App;
*/
function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/editblog/:id" element={<EditBlog />} />
        <Route
          path="/createpost"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />

        <Route path="/register" element={<Register />} />
        {/* Add more routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;
