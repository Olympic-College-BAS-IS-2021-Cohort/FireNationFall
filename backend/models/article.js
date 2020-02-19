const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: String,
	author : String, // todo: use user id as author here
	createdAt: Date,
	updatedAt: Date,
	body: String
});

module.exports = mongoose.model('Article', articleSchema);