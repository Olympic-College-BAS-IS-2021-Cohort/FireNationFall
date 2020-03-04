const express = require('express');
const checkJwt = require('../middlewares/checkJwt');
const jwtAuthz = require('express-jwt-authz');


const router = express.Router();

const portfoliosController = require('../controllers/portfolios');

router.delete('/:id', checkJwt, jwtAuthz(['delete:portfolios']), portfoliosController.deletePortfolio);

router.get('/:id', portfoliosController.getPortfolioById);

router.patch('/:id', checkJwt, jwtAuthz(['update:portfolios']), portfoliosController.updatePortfolio);

router.post('/', checkJwt, jwtAuthz(['create:portfolios']), portfoliosController.postPortfolio);

router.get('/', portfoliosController.getPortfolios);



module.exports = router;