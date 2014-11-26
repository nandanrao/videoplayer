angular.module('ananas')
  .factory('playHelpers', function ($q, $http, $timeout){
    
    var playVideo = function(vid){
      // TODO: error handling on video load errors!
      return $q(function(resolve, reject){
        vid[0].play()
        vid.on('ended', function(){
          resolve(vid)
        })
      })
    }

    var loadVideo = function(vid){
      return $q(function(resolve, reject){
        vid.on('canplaythrough', function(e){
          resolve(vid)
        })  
      }) 
    }

    return {
      playVideo: playVideo,
      loadVideo: loadVideo
    }
  })