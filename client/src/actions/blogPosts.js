import * as api from "../api/api";

export const fetchAllBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllBlogPosts();
    // console.log("fetch data called");
    // console.log(data);
    dispatch({ type: "GET_ALL_BLOGS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addBlogPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.addNewBlogPost(post);

    dispatch({ type: "ADD_NEW_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editBlogPosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editSingleBlogPost(id, post);
    dispatch({ type: "EDIT_SINGLE_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const upvoteSinglePost = (post) => async (dispatch) => {
  try {
    const { data } = await api.upvoteSinglePost(post);

    dispatch({ type: "UPVOTE_SINGLE_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeBlogPost = (post) => async (dispatch) => {
  try {
    const { data } = await await api.removeBlogPost(post);

    dispatch({ type: "DELETE_SINGLE_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
