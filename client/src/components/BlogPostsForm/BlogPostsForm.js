import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import "./BlogPostsForm.css";
import { addBlogPosts, editBlogPosts } from "../../actions/blogPosts";

const BlogPostsForm = ({ blogPostId, setBlogPostId }) => {
  const [blogInfo, setBlogInfo] = useState({
    creator: "",
    title: "",
    description: "",
    tags: "",
    fileUpload: "",
  });
  const post = useSelector((state) =>
    blogPostId
      ? state.posts.find((message) => message._id === blogPostId)
      : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setBlogInfo(post);
  }, [post]);
  // console.log(blogInfo.creator)
  const clear = () => {
    setBlogPostId(0);
    setBlogInfo({
      creator: "",
      title: "",
      description: "",
      tags: "",
      fileUpload: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    if (blogPostId === 0) {
      // const url = "http://localhost:4000/api/blogs";
      dispatch(addBlogPosts(blogInfo));

      // axios.post(url,blogInfo)
    } else {
      dispatch(editBlogPosts(blogInfo));
      // console.log(blogPostId)
    }
    clear();
  };

  return (
    <form onSubmit={handleSubmit} className="main-form-div">
      <h1 variant="h5" className="heading">
        {blogPostId ? `Update "${post.title}"` : "✨ Create a blog ✨"}
      </h1>
      <div className="info-div">
        <div className="sub-div1" id="div1">
          <div className="div1">
            <label className="labels">Title</label>
            <input
              className="input-info"
              name="title"
              placeholder="Enter the post title here"
              type="text"
              value={blogInfo.title || ""}
              onChange={(e) =>
                setBlogInfo({ ...blogInfo, title: e.target.value })
              }
              required
            />
          </div>
          <div className="div1">
            <label className="labels">Creator</label>
            <input
              className="input-info"
              name="creator"
              placeholder="✍️ Author name"
              type="text"
              value={blogInfo.creator || ""}
              onChange={(e) =>
                setBlogInfo({ ...blogInfo, creator: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="sub-div" id="div3">
          <label className="labels">Tags (5 max seperated by comma)</label>
          <input
            className="input-info"
            name="tags"
            variant="outlined"
            placeholder="🏷️ Tags"
            type="text"
            value={blogInfo.tags || ""}
            onChange={(e) =>
              setBlogInfo({ ...blogInfo, tags: e.target.value.split(",") })
            }
            required
          />
        </div>
        <div className="sub-div" id="div4">
          <label className="labels">Description</label>
          <textarea
            className="input-info"
            name="description"
            variant="outlined"
            type="text"
            rows={8}
            value={blogInfo.description || ""}
            onChange={(e) =>
              setBlogInfo({ ...blogInfo, description: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div className="sub-div2">
        <label className="labels" style={{ color: "#8896a6" }}>
          Upload Blog Image
        </label>

        <div id="kaibi" className="input-file">
          <label className="">Click here to upload the file</label>
          <FileBase
            type="file"
            multiple={false}
            id="kaipn"
            onDone={({ base64 }) =>
              setBlogInfo({ ...blogInfo, fileUpload: base64 })
            }
          />
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Publish 📝
      </button>
    </form>
    // </Paper>
  );
};

export default BlogPostsForm;
