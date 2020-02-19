const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
	published: Boolean,
	name: String, //todo: use a User schema and get the name out here
	pictureUrl: String,
	about: String,
	experience: [{
		startDate: Date,
		endDate: Date,
		position: String,
		jobDescription: String
	}],
	education: [{
		startDate: Date,
		endDate: Date,
		description: String
	}],
	skills: [String]
});


module.exports = mongoose.model('Portfolio', portfolioSchema);