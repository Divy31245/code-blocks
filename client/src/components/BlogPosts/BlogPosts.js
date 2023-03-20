import { useDispatch } from "react-redux";
import { upvoteSinglePost, removeBlogPost } from "../../actions/blogPosts";
import moment from "moment";
import "./BlogPosts.css";
import { Upvote } from "@styled-icons/boxicons-solid";
import { Edit } from "@styled-icons/boxicons-solid";
import { Delete } from "@styled-icons/material";
import { useEffect } from "react";
const BlogPosts = ({ post, setBlogPostId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="upvote-btn"
        onClick={() => dispatch(upvoteSinglePost(post._id))}
      >
        <Upvote className="upvote-img" size={30} /> {post.upvote}
      </button>

      <div className="sec-div">
        <div className="blog-title">{post.title}</div>
        <div className="blog-creator-div">
          <div>{moment(post.createdAt).fromNow()}</div>
          <div>Created By {post.creator}</div>
        </div>
        <p className="description">{post.description} </p>
        <div className="img-div">
          {post.fileUpload ? (
            <img className="img-post" src={`${post.fileUpload}`} alt="" />
          ) : (
            ""
          )}
        </div>
        <div className="tags">
          {post.tags.map((tag, id) => (
            <div key={id} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="btns">
          <button className="btn" onClick={setBlogPostId(post._id)}>
            <Edit size={40} />
          </button>
          <button
            className="btn"
            id="btn2"
            onClick={() => dispatch(removeBlogPost(post._id))}
          >
            <Delete size={40} />
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
