'use strict';

var express = require('express');
var path = require('path');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');

var scoreRoute = require('./routes/scoreboard');


mongoose.connect('localhost:27017/fighter-scores');

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(parser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});

app.listen(3000, function() {
  console.log('serving');
});

app.get('/api/scores', function(req, resp) {
	resp.send(scores);
})

app.post('/api/scores', function (req, resp) {
	// here we add the post data to the array that we have declared above
	scores.push({ name: req.body.name, score: req.body.score })
	resp.send("Thanks! The score is inserted into the array!");
});
