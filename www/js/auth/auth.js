angular.module('ananas')
  .factory('Auth', function(fb, $firebaseAuth){
    return $firebaseAuth(fb.ref)
  })