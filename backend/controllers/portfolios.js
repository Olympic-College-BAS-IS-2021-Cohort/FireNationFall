const Portfolio = require('../models/portfolio');


const getPortfolios = (req, res, next) => {
	Portfolio.find({}, (err, portfolios) => {
		if(err) {
			return res.status(500).send({
				err: 'There was an error fetching portfolios'
			})
		}
		res.status(200).send(portfolios);
	});
};

const getPortfolioById = (req, res ,next) => {
	let {id} = req.params;
	console.log(req.params);
	Portfolio.findById(id, (err, portfolio) => {
		if(!portfolio) {
			return res.status(400).send({
				err: 'BAD! portfolio id wrong'
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
		if(err) {
			 res.status(500).send({
				err: 'There was an error creating your portfolio'
			})
		}
	});
	res.status(201).send('portfolio created');
};

const updatePortfolio = (req, res, next) => {
	const {id} = req.params;
	const updatedPortfolio = req.body;

	Portfolio.findByIdAndUpdate(id, updatedPortfolio, (err, portfolio) => {
		if(!portfolio) {
			return res.status(400).send({
				err: 'Cannot find the portfolio to update'
			})
		}
		if(err) {
			return res.status(500).send({
				err: 'There was an error finding the portfolio in database'
			})
		}

		res.status(200).send({
			message: 'Portfolio updated successfully'
		});
	})

};

const deletePortfolio = (req, res ,next) => {
	const {id} = req.params;

	Portfolio.findByIdAndDelete(id, err => {
		if(err) {
			res.status(500).send({
				err: 'There was an error deleting your portfolio'
			})
		}

		res.status(200).send({
			message: 'Portfolio deleted'
		})
	})
};

module.exports = {
	getPortfolios,
	getPortfolioById,
	postPortfolio,
	deletePortfolio,
	updatePortfolio
};