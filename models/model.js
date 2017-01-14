const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let model = new Schema({
	name: String,
	date: Date 
});

module.exports = mongoose.model('model', model);