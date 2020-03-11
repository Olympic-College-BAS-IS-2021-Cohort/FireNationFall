const Article = require('../models/portfolio');


const getArticles = (req, res, next) => {
	Article.find({}, (err, articles) => {
		if (err) {
			return res.status(500).send({
				err: 'There was an error fetching your articles'
			})
		}

		res.status(200).send(articles);
	})
};

const getArticleById = (req, res, next) => {
	const {id} = req.params;
	Article.findById(id, (err, article) => {
		if (err) {
			return res.status(500).send({
				err: 'There was an error fetching your article'
			})
		}

		res.status(200).send(article);
	})
};


const postArticle = (req, res, next) => {
	const article = req.body;

	const newArticle = new Article(article);

	newArticle.save(err => {
		if (err) {
			res.status(500).send({
				err: 'There was an error saving your article'
			})
		}
	});

	res.status(201).send({
		message: 'Article created'
	})
};

const updateArticle = (req, res, next) => {
	const {id} = req.params;
	const updatedArticle = req.body;

	Article.findOneAndUpdate({
			'_id': id
		},
		updatedArticle,
		(err, article) => {
			if(!article) {
				return res.status(400).send({
					err: 'BAD!'
				})
			}
			if (err) {
				return res.status(500).send({
					err: 'There was an error updating your article'
				})
			}

			res.status(200).send({
				message: 'Article updated successfully.'
			})
		})
};

const deleteArticle = (req, res, next) => {
	const {id} = req.params;

	Article.findOneAndDelete({
		"_id": id
	}, (err, article) => {
		if(!article) {
			return res.status(400).send({
				err: 'BAD REQUEST!'
			})
		}
		if(err) {
			res.status(500).send({
				err: 'There was an error deleting your article'
			})
		}

		res.status(200).send({
			message: 'Deleted article successfully'
		})
	})
};

module.exports = {
	getArticles,
	getArticleById,
	postArticle,
	updateArticle,
	deleteArticle
};