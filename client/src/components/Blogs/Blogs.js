//components/Blogs
import React from "react";
// import axios from "axios";
// import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import BlogPosts from "../BlogPosts/BlogPosts";
// import useStyles from "./styles";
import './Blogs.css'
const a = (state) => state.posts;

const Blogs = ({ setBlogPostId }) => {
  const posts = useSelector(a);
  //   const classes = useStyles();
  const records = posts;
  console.log(posts)
  records.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt); // descending
  })

  

  return (
    <div className="main-blog-div">
      {records.length ? records.map((post) => (
        <div key={post._id} className='main-blog-post-div'>
          <BlogPosts post={post} setBlogPostId={setBlogPostId} />
        </div>
      )) : <div className="no-posts">no posts....</div>}
    </div>
  );
};

export default Blogs;
