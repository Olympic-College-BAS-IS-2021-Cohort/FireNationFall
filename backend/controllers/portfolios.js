
const Portfolio = require('../models/portfolio');


const getPortfolios = (req, res, next) => {
	let portfolios = undefined;
	Portfolio.find({}, (err, docs) => {
		portfolios = docs;
		res.send(portfolios);
	});
};

const getPortfolioById = (req, res ,next) => {
	console.log(req.params);
	res.send('getting portfolio by id')
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