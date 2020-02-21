const express = require('express');

const router = express.Router();

const portfolioRouter = require('./portfolios');
const articleRouter = require('./articles');

router.use('/portfolios', portfolioRouter);
router.use('/articles', articleRouter);


module.exports = router;