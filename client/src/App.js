import "./App.css";
import BlogPostsForm from "./components/BlogPostsForm/BlogPostsForm";
import Blogs from "./components/Blogs/Blogs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllBlogs } from "./actions/blogPosts";
// import axios from "axios";
function App() {
  const dispatch = useDispatch();
  const [blogPostId, setBlogPostId] = useState(0);

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [blogPostId, dispatch]);
  return (
    <div className="App">
      <h1 className="navbar-header">CODE-BLOCKS</h1>
      <div className='main'>
      <BlogPostsForm blogPostId={blogPostId} setBlogPostId={setBlogPostId} />
      <Blogs setBlogPostId={setBlogPostId} />
      </div>
    </div>
  );
}

export default App;

// const url = "http://localhost:4000/api/blogs";

// const getData= () =>{
//   axios.get(url).then((res) =>{
//     const newData = res.data;
//     console.log(newData)
//   })
// }

// console.log(axios.get(url).then(JSON));
// getData()
