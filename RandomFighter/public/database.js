'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fighter-scores', function(err) {
  if(err) {
    console.log('Ya done goofed!');
  } else {
    console.log('All good captain!');
  }
});
