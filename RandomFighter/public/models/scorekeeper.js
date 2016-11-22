var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
  name: {type: String},
  mc  : {type: Number}
});

module.exports = mongoose.model('Scoreboard', scoreSchema);
