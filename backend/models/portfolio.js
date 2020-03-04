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
	metaInfo: {
		type: String,
		required: true
	},
	shortDescription: {
		type: String,
		required: true
	},
	about: String,
	experience: [
		{
			company: {
				type: String,
				required: true
			}
		},
		{
		startDateJob: {
			type: Date,
			required: true
		},
		endDateJob: Date,
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
		institution: String,
		startDateSchool: Date,
		endDateSchool: Date,
		major: String
	}],
	skills: [{
		category: {
			type: String
		},
		list: [String]
	}]
});

const model = mongoose.model('Portfolio', portfolioSchema);

//
portfolioSchema.methods.updatePortfolio = (id, updatedPortfolio) => {
	model.findById(id, (err, portfolio) => {
		console.log(portfolio);
	})
};


module.exports = model;