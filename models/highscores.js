//import mongoose
const mongoose = require('mongoose');

//load schema
//schema is a default function inside mongoose
const Schema = mongoose.Schema;

//Create schema for the model
const Highscore = new Schema({
	'player1': {
		'name' : {type: String},
		'moves' : {type: Number}
	},
	'player2': {
		'name' : {type: String},
		'moves' : {type: Number}
	},
	score: {
		type: Number
	}
});

//export this model
module.exports = mongoose.model('Highscore', Highscore);
