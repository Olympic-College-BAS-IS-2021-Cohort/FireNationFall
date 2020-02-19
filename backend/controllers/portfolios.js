const getPortfolios = (req, res, next) => {
	res.send('getting portfolios');
};

const getPortfolioById = (req, res ,next) => {
	console.log(req.params);
	res.send('getting portfolio by id')
};


const postPortfolio = (req, res ,next) => {
	res.send('posting portfolio');
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