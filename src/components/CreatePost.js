import "../styles/createPost.css";

function CreatePost() {
  return (
    <div className="create-post-form">
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write your post here"></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
