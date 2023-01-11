import express from 'express';

import { getArticles, getArticle, createArticle,getArticlesById, publicArticle,removeArticle,updateArticle } from '../controllers/articles.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getArticles);
router.get('/:id', getArticle);
router.get('/get-by-id/:id', getArticlesById);
router.get('/update-status/:id/:status', publicArticle);
router.get('/remove/:id', removeArticle);
router.post('/',auth,  createArticle);
router.post('/update',auth,  updateArticle);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;