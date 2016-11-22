var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
  name: {type: String},
  score  : {type: Number}
});

module.exports = mongoose.model('Scores', scoreSchema);
