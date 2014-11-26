angular.module('ananas')
  .factory('fb', function(){
    var fb = {}
    fb.ref = new Firebase('https://ananas.firebaseio.com/');
    fb.renditions = fb.ref.child('renditions');
    fb.users = fb.ref.child('users');
    fb.games = fb.ref.child('games');
    return fb
  })