const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const portfoliosRoutes = require('./routes/portfolios');
const articlesRoutes = require('./routes/articles');
const apiRoutes  = require('./routes/api');

//middlewares to parse a request's body to usable formats.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.get('/', function getHome(req, res) {
	res.send('Reaching getHome route');
});

mongoose.connect('mongodb+srv://ndhuutai:deptraI1@fire-nation-dev-cluster-swtcr.mongodb.net/firenation?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	app.listen(3001, () => {
		console.log(`running on port ${3001}`);
	});
}).catch(e => {
	console.log('error connecting to mongo database');
});
