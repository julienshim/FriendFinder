var friendsList = require('../data/friends.js');
var match = require('./javascript/modules/match.js');

module.exports = function(app){
    app.get('/api/friends', function(req,res){
      res.json(friendsList);
    });
  
    app.post('/api/friends', function(req,res){
      var user = req.body;
      var scoresDifferenceArray = [];
      var friendMatchIndex;
      var friendMatch;

      match.scoresDifferenceCheck(user, friendsList, scoresDifferenceArray);
      friendMatchIndex = scoresDifferenceArray.indexOf(Math.min(...scoresDifferenceArray));
      friendMatch = friendsList[friendMatchIndex];
      res.json(friendMatch);
    });
  };
  