'use strict';

var Score = require('./models/scorekeeper');

var scores = [
];

scores.forEach(function(score, index) {
  Score.find({'name': score}, function (err, scores) {
    if(!err && !scores.length) {
      Score.create({score: mc, name: fighterStats.name});
    };
  });
});
