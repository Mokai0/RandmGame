'use strict';

var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
  name: String,
  score: Number
});

var model = mongoose.model('scoreboard', scoreSchema);

module.exports = model;
