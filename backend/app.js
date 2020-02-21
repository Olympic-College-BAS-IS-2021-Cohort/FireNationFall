const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {auth} = require('express-openid-connect');

let app = express();

const config = {
	required: false,
	auth0Logout: true,
	baseURL: "https://localhost:3001",
	issuerBaseURL: "https://fire-nation.auth0.com",
	clientID: "nopMBbTaxWzrYzRx618dH85sPYZJMfXk",
	appSessionSecret: "a long, randomly-generated string stored in env?"
};


const  isAuthenticated = require('./middlewares/authenticate');
const apiRoutes  = require('./routes/api');

const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');

const options = {key, cert};

app.use(auth(config));


//middlewares to parse a request's body to usable formats.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'..','frontend','build')));

app.use('/api', isAuthenticated, apiRoutes);

app.get('*', function getHome(req, res) {
	res.sendFile(path.join(__dirname,'..','frontend','build','index.html'));
});


app = https.createServer(options, app);

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
