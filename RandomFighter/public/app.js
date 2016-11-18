'use strict';

var express = require('express');
var app = express();
var parser = require('body-parser');
var path = require('path');

require('./database');
require('./seed');

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(parser.json());


app.listen(3000, function() {
  console.log('serving');
});
