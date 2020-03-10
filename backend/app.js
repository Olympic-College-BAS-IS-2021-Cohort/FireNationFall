// const https = require('https');
// const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const aws = require('aws-sdk');
const multer = require('multer');
const multers3 = require('multer-s3');


// const jwtAuthz = require('express-jwt-authz');
//
// const {auth, requiresAuth} = require('express-openid-connect');



let app = express();


const apiRoutes = require('./routes/api');

//for saving in hosted environment
// const fileStorage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, path.join('.','images'));
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, Date.now()+ '_' + file.originalname);
// 	}
// });

const s3 = new aws.S3();
const fileStorage =  multers3({
	s3: s3,
	bucket: 'firenation',
	acl: 'public read',
	metadata: function (req, file, cb) {
		cb(null, {fieldName: 'image'})
	},
	key: function (req, file, cb) {
		cb(null, Date.now()+ '_' + file.originalname)
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

app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('picture'));
app.use(express.static(path.join(__dirname, '.', 'public', 'build')));
console.log('got here');
app.use('/api', apiRoutes);


app.use('/images', express.static(path.join(__dirname,'images')));

app.get('*', function getHome(req, res) {
	res.sendFile(path.join(__dirname, '.', 'public', 'build', 'index.html'));
});

//for self-signed and self-hosted server
// const key = fs.readFileSync('./localhost-key.pem');
// const cert = fs.readFileSync('./localhost.pem');
// const options = {key, cert};
// app = https.createServer(options, app);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URI}?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	app.listen(process.env.PORT, () => {
		console.log(`running normally`);
	});
}).catch(e => {
	console.log('error connecting to mongo database');
});
