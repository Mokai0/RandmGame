var express = require('express');
// var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var Scoreboard = ("../models/scorekeeper");

// app.get('/', function (req, res) {
//   res.send('hello world')
// });

app.get('/', function(req, res) {
  Scoreboard.find()
    .exec(function(err, docs) {
      if(err){
        return res.status(404).json({
          title: "ERROR",
          error: err
        });
      }
      res.status(200).json({
        message: "SUCCESS",
        obj: docs
      });
    });
});
