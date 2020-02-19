const express = require('express');
const router = express.Router();

const portfoliosController = require('../controllers/portfolios');

router.delete('/:id', portfoliosController.deletePortfolio);

router.get('/:id', portfoliosController.getPortfolioById);

router.patch('/:id', portfoliosController.updatePortfolio);

router.post('/', portfoliosController.postPortfolio);

router.get('/', portfoliosController.getPortfolios);



module.exports = router;