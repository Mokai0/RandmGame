'use strict';

var express = require('express');
var path = require('path');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');
var Scores = require('./models/scorekeeper');
var scoreRoute = require('./routes/scoreboard');


mongoose.connect('localhost:27017/fighter-scores');

app.use('/', express.static(path.join(__dirname, './public')));
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
  Scores.find({}, function(err, scores) {
    resp.send(scores);
  });

})

app.post('/api/scores', function (req, resp) {
	// here we add the post data to the array that we have declared above
  console.log(req.body);
  var newScore = Scores({
    name: req.body.name,
    score: req.body.score
  });

  // save the user
  newScore.save(function(err) {
    if (err) {
      resp.send("An error occured");
      throw err;
    }
    else {
      resp.send("Thanks! The score is inserted into the array!");
      console.log('score created!');
    }

  });

});
