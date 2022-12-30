import express from 'express';
import mongoose from 'mongoose';

import Article from '../models/article.js';

const router = express.Router();

export const getArticles = async (req, res) => { 
    try {
        const postMessages = await Article.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getArticle = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Article.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createArticle = async (req, res) => {
    console.log("got here")
    const {post} = req.body;
    console.log(post)
    const newPostMessage = new Article({ ...post, user_id: req.userId, createdAt: new Date().toISOString() })
    console.log(newPostMessage)
    try {
        await newPostMessage.save();
        res.status(201).json("Create successful" );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// export const updateArticle = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

// export const deleteArticle = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await PostMessage.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }

// export const likeArticle = async (req, res) => {
//     const { id } = req.params;

//     if (!req.userId) {
//         return res.json({ message: "Unauthenticated" });
//       }

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//     const post = await PostMessage.findById(id);

//     const index = post.likes.findIndex((id) => id ===String(req.userId));

//     if (index === -1) {
//       post.likes.push(req.userId);
//     } else {
//       post.likes = post.likes.filter((id) => id !== String(req.userId));
//     }
//     const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
//     res.status(200).json(updatedPost);
// }


export default router;