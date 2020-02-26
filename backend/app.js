const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwtAuthz = require('express-jwt-authz');

const {auth, requiresAuth} = require('express-openid-connect');

const checkJwt = require('./middlewares/checkJwt');


let app = express();



const apiRoutes  = require('./routes/api');

const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');

const options = {key, cert};

//getting user profile
// app.get('/profile', requiresAuth(), (req, res) => {
// 	res.send(JSON.stringify(req.openid.user));
// });

// app.use(auth(config));



//middlewares to parse a request's body to usable formats.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'..','frontend','build')));

app.use('/api', (req, res ,next) => {
	console.log('i got here first');
	next();
}, checkJwt, apiRoutes);


app.use('/callback', (req, res, next) => {
	res.redirect('https://localhost:3001/admin');
});

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
