import axios from "axios";

const url = "http://localhost:4000/api/blogs";

export const fetchAllBlogPosts = () => axios.get(url);
export const addNewBlogPost = (newBlog) => axios.post(url, newBlog);

export const editSingleBlogPost = (id,editedPost) =>
  axios.patch(`${url}/${id}`,editedPost);

export const upvoteSinglePost = (id) =>
  axios.patch(`${url}/${id}/likedBlogPost`);

export const removeBlogPost = (id) => axios.delete(`${url}/${id}`);
