var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
  name: {type: String},
  mc  : {type: Number}
});

module.exports = mongoose.model('Scoreboard', scoreSchema);

[
  {AAA, 5},
  {BBB, 8},
  {CCC, 12}
]
