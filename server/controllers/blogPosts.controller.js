import express from "express";
import mongoose from "mongoose";
import blogPost from "../models/blogs.js";
const router = express.Router();

export const getAllBlogPosts = async (req, res) => {
  try {
    const blogposts = await blogPost.find();
    return res.status(200).json(blogposts);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const addBlogPosts = async (req, res) => {
  const { title, description, fileUpload, creator, tags } = req.body;

  const createNewPost = new blogPost({
    title,
    description,
    fileUpload,
    creator,
    tags,
  });

  try {
    await createNewPost.save();
    return res.status(201).json(createNewPost);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const getSinglePost = async (req, res) => {
  const { id } = req.params;

  try {
    const singlePost = await blogPost.findById(id);
    return res.status(200).json(singlePost);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateSingleBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, description, fileUpload, creator, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send(`post ${req.params.id} post not found.`);
  }
  try {
    const updatedPost = await blogPost.findByIdAndUpdate(id, {
      title,
      description,
      fileUpload,
      creator,
      tags,
    });
    return res.json(updatedPost);
  } catch (e) {
    res.status(500).send(e);
  }
  // const updatedPost = {
  //   creator,
  //   title,
  //   description,
  //   tags,
  //   fileUpload,
  //   _id: id,
  // };
  // await blogPost.findByIdAndUpdate({_id:req.params.id}, updatedPost, { new: true });
  // return res.json(updatedPost);
};

export const removeBlogPost = async (req, res) => {
  const { id } = req.params.id;
  // console.log(id)
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send(`post with id ${id} not found`);
  }

  await blogPost
    .findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      return res.sendStatus({ message: "success" });
    })
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};

export const likeBlogPost = async (req, res) => {
  const { id } = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send(`post with id ${req.params.id} not found`);
  }

  const post = await blogPost.findById(req.params.id);

  const likedBlogPost = await blogPost.findByIdAndUpdate(
    { _id: req.params.id },
    { upvote: post.upvote + 1 },
    { new: true }
  );
  console.log(likeBlogPost);
  return res.json(likedBlogPost);
};

export default router;
