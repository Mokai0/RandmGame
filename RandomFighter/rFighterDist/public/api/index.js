'use strict';

var express = require('express');
var Score = require('../models/scorekeeper');
// var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/scorekeeper', function(req, res) {
  Score.find({}, function(err, score) {
    if(err) {
      //do something
      return res.status(500).json({message: err.message});
      // return console.log(err);
    }
    res.json({scores:scores});
  });
});

// TODO: Add POST route to create new entries
router.post('/scorekeeper', function(req, res) {
  var score = req.body;
  console.log(req.body);
  Score.create(score, function(err, todo) {
    if(err) {
      return res.status(500).json({err: err.messge});
    }
    res.json({'todo': todo, message: 'Todo Created!'});
  });
});
//
// //TODO: Add PUT route to update existing entries
// router.put('/todos/:id', function(req, res) {
//   var id = req.params.id;
//   var todo = req.body;
//   if(todo && todo._id !== id) {
//     return res.status(500).json({err: "The Id's don't match!"});
//   }
//   Todo.findByIdAndUpdate(id, todo, {new:true}, function(err, todo) {
//     if(err) {
//       return res.status(500).json({err: err.messge});
//     }
//     res.json({'todo': todo, message: 'Todo Updated!'});
//   });
// });
//
// //TODO: Add Delet route to delete existing entries

module.exports = router;
