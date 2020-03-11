const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author : String, // todo: use user id as author here
	createdAt: {
		type: Date,
		required: true
	},
	updatedAt: {
		type: Date,
		required: true
	},
	body: {
		type: String,
		required: true,
		minlength: [1, 'must have at least something you know?']
	}
});

module.exports = mongoose.model('Article', articleSchema);