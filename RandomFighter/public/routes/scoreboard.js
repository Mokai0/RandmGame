var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var Scoreboard = ("../models/scorekeeper");

router.get('/', funtion(req, res) {
  Scoreboard.find()
    .exec(funtion(err, docs) {
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
