const express = require('express');

const router = express.Router();

const portfolioRouter = require('./portfolios');
const articleRouter = require('./articles');

router.use('/portfolios', (req, res, next) => {
	console.log('i got to here');
	next();
}, portfolioRouter);
router.use('/articles', articleRouter);


module.exports = router;