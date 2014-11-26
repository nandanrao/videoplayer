angular.module('ananas')
  .factory('Game', function(fb, $firebase){
    var Game = fb.games;

    Game.create = function (data){
      var ref = Game.push(data);
      var obj = $firebase(ref);
      return obj.$asObject().$loaded()
    };

    return Game
  })