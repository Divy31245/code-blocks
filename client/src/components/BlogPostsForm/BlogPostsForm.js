import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import './BlogPostsForm.css'
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
  };
  

  return (
    <form onSubmit={handleSubmit} className='main-form-div'>
      <h1 variant="h5">
        {blogPostId ? `Update "${post.title}"` : "✨ Create a blog ✨"}
      </h1>

      <div>
        <h2> 🖼️ Upload Blog Image</h2>
        <div className="input-file">
        <button id="kaibi" className="input-file">
          
          <label for='kaipn'>Upload the Photo here</label>
        <FileBase
          type="file"
          multiple={false}
          id='kaipn'
          onDone={({ base64 }) =>
            setBlogInfo({ ...blogInfo, fileUpload: base64 })
          }
        />
        </button>
        </div>
      </div>
      <label>Title</label>
      <input
        name="title"
        type="text"
        value={blogInfo.title || ''}
        onChange={(e) => setBlogInfo({ ...blogInfo, title: e.target.value })}
      />
      <label>Description</label>
      <input
        name="description"
        variant="outlined"
        label="📙 Blog Description"
        type="text"
        rows={7}
        value={blogInfo.description || ''}
        onChange={(e) =>
          setBlogInfo({ ...blogInfo, description: e.target.value })
        }
      />
      <label>Creator</label>
      <input
        name="creator"
        label="✍️ Author name"
        type="text"
        value={blogInfo.creator || ''}
        onChange={(e) => setBlogInfo({ ...blogInfo, creator: e.target.value })}
      />
      <label>Tags (5 max seperated by comma)</label>
      <input
        name="tags"
        variant="outlined"
        label="🏷️ Tags"
        type="text"
        value={blogInfo.tags || ''}
        onChange={(e) =>
          setBlogInfo({ ...blogInfo, tags: e.target.value.split(",") })
        }
      />

      <button type="submit">Publish 📝</button>
    </form>
    // </Paper>
  );
};

export default BlogPostsForm;
