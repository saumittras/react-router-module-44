import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const postStyle = {
    border: "2px solid green",
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "10px",
  };
  const { title, id } = post;
  return (
    <div style={postStyle}>
      <h4>Post of ID: {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
