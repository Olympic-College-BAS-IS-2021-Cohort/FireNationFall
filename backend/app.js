const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const portfoliosRoutes = require('./routes/portfolios');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/portfolios', portfoliosRoutes);
// app.use('/articles', articlesRoutes);

app.get('/', function getHome(req,res) {
	res.send('Reaching getHome route');
});

app.listen(3001);
