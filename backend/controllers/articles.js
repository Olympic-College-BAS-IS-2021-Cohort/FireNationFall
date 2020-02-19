const Article = require('../models/portfolio');


const getArticles = (req, res, next) => {
	res.send('getting articles');
};

const getArticleById = (req, res ,next) => {
	console.log(req.body);
	res.send('getting portfolio by id')
};


const postArticle = (req, res ,next) => {
	console.log(req.body);
	res.send('posting portfolio');
};

const deleteArticle = (req, res ,next) => {
	res.send('deleting portfolio');
};

module.exports = {
	getArticles,
	getArticleById,
	postArticle,
	deleteArticle
};