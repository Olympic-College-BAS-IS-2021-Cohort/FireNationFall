const express = require('express');
const router = express.Router();

const articlesController = require('../controllers/articles');

router.get('/:id', articlesController.getArticleById);

router.patch('/:id', articlesController.updateArticle);

router.delete('/:id', articlesController.deleteArticle);

router.get('/', articlesController.getArticles);

router.post('/', articlesController.postArticle);




module.exports = router;