import axios from "axios";

const url = "http://localhost:4000/api/blogs";

export const fetchAllBlogPosts = () => axios.get(url);
export const addNewBlogPost = (newBlog) => axios.post(url, newBlog);

export const editSingleBlogPost = (post) => {
  console.log("editted", post._id);
  axios.patch(`${url}/${post._id}`, post);
};
export const upvoteSinglePost = (id) =>
  axios.patch(`${url}/${id}/likedBlogPost`);

export const removeBlogPost = (id) => axios.delete(`${url}/${id}`);
