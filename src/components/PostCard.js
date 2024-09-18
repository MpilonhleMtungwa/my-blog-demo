import "../styles/postCard.css";

function PostCard({ title }) {
  return (
    <div class="container">
      <div class="card">
        <div class="img-container"></div>
        <div class="card-content">
          <h2>Hello</h2>
          <h1>From the Other Side of the World</h1>
          <p class="excerpt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            odio dolorem amet, sunt magnam asperiores exercitationem
            consequuntur? Molestias asperiores rerum doloremque reiciendis.
          </p>
          <p class="author">By Jrom</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
