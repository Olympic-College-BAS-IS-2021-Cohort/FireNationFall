const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
	published: {
		type: Boolean,
		required: [true, 'Needed for filter']
	},
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: [1, 'A name must have at least 1 character']
	}, //todo: use a User schema and get the name out here
	pictureUrl: String,
	about: String,
	experience: [{
		startDate: {
			type: Date,
			required: true
		},
		endDate: Date,
		position: {
			type: String,
			required : true,
			minLength: 1
		},
		jobDescription: {
			type: String,
			required: true,
			minLength: 1
		}
	}],
	education: [{
		startDate: Date,
		endDate: Date,
		description: String
	}],
	skills: [String]
});

const model = mongoose.model('Portfolio', portfolioSchema);

//
portfolioSchema.methods.updatePortfolio = (id, updatedPortfolio) => {
	model.find(id, portfolio => {
		console.log(portfolio);
	})
};


module.exports = model;