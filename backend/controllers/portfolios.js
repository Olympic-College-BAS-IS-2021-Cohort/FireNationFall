const mongooseTypes = require('mongoose').Types;
const Portfolio = require('../models/portfolio');


const getPortfolios = (req, res, next) => {
	Portfolio.find({}, (err, portfolios) => {
		if(err) {
			return res.status(500).send({
				err: 'There was an error fetching portoflios'
			})
		}
		res.status(200).send(portfolios);
	});
};

const getPortfolioById = (req, res ,next) => {
	let {id} = req.params;
	// id = mongooseTypes.ObjectId(id);
	Portfolio.findById(id, (err, portfolio) => {
		if(!portfolio) {
			return res.status(400).send({
				err: 'BAD!'
			});
		}
		if(err) {
			return res.status(500).send({
				err: 'There was an error fetching your portfolio'
			})
		}
		res.status(200).send(portfolio);
	})
};


const postPortfolio = (req, res ,next) => {
	const data = req.body;
	const newPortfolio = new Portfolio(data);

	newPortfolio.save(err => {
		console.log(err);
	});
	res.status(201).send('portfolio created');
};

const deletePortfolio = (req, res ,next) => {
	res.send('deleting portfolio');
};

module.exports = {
	getPortfolios,
	getPortfolioById,
	postPortfolio,
	deletePortfolio
};