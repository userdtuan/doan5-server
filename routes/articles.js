import express from 'express';

import { getArticles, getArticle, createArticle, } from '../controllers/articles.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getArticles);
router.post('/',auth,  createArticle);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;