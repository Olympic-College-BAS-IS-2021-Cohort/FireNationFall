const express = require('express');

const router = express.Router();

const portfolioRouter = require('./portfolios');
const articleRouter = require('./articles');

router.use('/portfolios', (req, res, next) => {
	console.log('req.file here',req.file);
	next();
}, portfolioRouter);
router.use('/articles', articleRouter);


module.exports = router;