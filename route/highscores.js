//include express framework
const express = require('express');

//include body-parser on project for handling http requests
const bodyParser = require('body-parser');

//include cors
const cors = require('cors');

//use router in express framework
const router = express.Router();

//include or require model for schema
const highscoreModel = require('../models/highscores');

router.use(cors());

router.post('/add', (req, res) => {
	const newHighscore = highscoreModel(req.body);
	newHighscore.save(err=>{
		if(!err){
			return res.json({
				'message' : 'Record Registered Successfully'
			})
		}
	});
});

router.get('/fetchAll', (req, res, next) => {
	highscoreModel.find({}, null, {sort: {'score':-1}}, (err, highscores) => {
		if(!err) {
			return res.json({
				'highscores' : highscores
			})
		} else {
			return res.status(500).json({
				'error': 'data not found'
			});
		}
	});
})


module.exports = router;