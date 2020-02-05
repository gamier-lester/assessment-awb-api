//include the express framework
const express = require('express');

//mongoose 
const mongoose = require('mongoose');

//cors
const cors = require('cors');

//live database
const databaseUrl = process.env.DATABASE_URL || 'mongodb+srv://admin:admin@melnstack-cqku8.mongodb.net/assessment_db?retryWrites=true';


//inlcude body parser for json data
const bodyParser = require('body-parser');

//initiate app
const app = express();

//initiate item route
const highscores = require('./route/highscores.js');


//initiate connection to mongo db
mongoose.connect(databaseUrl, {useNewUrlParser: true});

mongoose.connection.once('open', () => {
	console.log('Remote Database Connection Established');
});

//configure express/middleware to use bodyparser
app.use(bodyParser.json());

//use cors
app.use(cors());

//use declared route
app.use('/assessment', highscores);

//error handler for middleware
app.use( (err, req, res, next) => {
	res.status(422).send({error : err.message})
})

const port = process.env.PORT || 3002;

app.listen(port, () => {
	console.log(`Server is running at ${port}`);
})
