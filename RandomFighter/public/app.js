'use strict';

var express = require('express');
var path = require('path');
var app = express();
var parser = require('body-parser');

require('./database');
require('./seed');

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(parser.json());


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
