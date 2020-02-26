const express = require('express');
const jwtAuthz = require('express-jwt-authz');


const router = express.Router();

const portfoliosController = require('../controllers/portfolios');

router.delete('/:id', jwtAuthz(['delete:portfolios']), portfoliosController.deletePortfolio);

router.get('/:id', portfoliosController.getPortfolioById);

router.patch('/:id', jwtAuthz(['update:portfolios']), portfoliosController.updatePortfolio);

router.post('/', jwtAuthz(['create:portfolios']), portfoliosController.postPortfolio);

router.get('/', portfoliosController.getPortfolios);



module.exports = router;