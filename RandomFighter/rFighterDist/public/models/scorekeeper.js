'use strict';

var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
  name: String,
  mc  : Number
});

var model = mongoose.model('Scoreboard', scoreSchema);

module.exports = model;
