module.exports = {
  
    scoresDifferenceCheck: function(user, friendsList, scoresDifferenceArray) {
        for (var i = 0; i < friendsList.length; i++) {
        var scoresDifference = 0;
          for (var j = 0; j < user.scores.length; j++){
            scoresDifference += Math.abs(parseInt(user.scores[j])-parseInt(friendsList[i].scores[j]));
          } 
        scoresDifferenceArray.push(scoresDifference);
      }
    }

}