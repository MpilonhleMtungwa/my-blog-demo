import "../styles/header.css";

function header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li>Login</li>
        </ul>
      </nav>
      <body className="bheader">
        <h1>Header</h1>
        <p>My supercool header</p>
      </body>
    </header>
  );
}

export default header;
