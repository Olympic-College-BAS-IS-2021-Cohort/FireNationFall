const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const multer = require('multer');


// const jwtAuthz = require('express-jwt-authz');
//
// const {auth, requiresAuth} = require('express-openid-connect');



let app = express();


const apiRoutes = require('./routes/api');

const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');

const options = {key, cert};

//getting user profile
// app.get('/profile', requiresAuth(), (req, res) => {
// 	res.send(JSON.stringify(req.openid.user));
// });

// app.use(auth(config));

const fileStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join('.','images'));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now()+ '_' + file.originalname);
	}
});

const fileFilter = (req, file, cb) => {
	switch (file.mimetype) {
		case 'image/png':
		case 'image/jpg':
		case 'image/jpeg':
			cb(null, true);
			break;
		default:
			cb(null, false);
	}
};

//middlewares to parse a request's body to usable formats.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//todo: have the file name saved somewhere that both the front end and backend can access, so the naming is consistent
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('picture'));
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.use('/api', apiRoutes);


app.use('/callback', (req, res, next) => {
	res.redirect('https://localhost:3001/admin');
});

app.use('/images', express.static(path.join(__dirname,'images')));

app.get('*', function getHome(req, res) {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
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
