

module.exports = {
  
    scoresDifferenceCheck: function(user, friendsList, scoresDifferenceArray) {
        for (var i = 0; i < friendsList.length; i++) {
        var scoresDifference = 0;
          for (var u = 0; u < user.scores.length; u++){
            scoresDifference += Math.abs(parseInt(user.scores[u])-parseInt(friendsList[i].scores[u]));
          } 
        scoresDifferenceArray.push(scoresDifference);
      }
    }

}