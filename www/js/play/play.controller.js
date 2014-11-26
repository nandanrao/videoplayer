angular.module('ananas')
  .controller('PlayCtrl', function ($scope, $q, rendition, playHelpers, Timer){

    // Get DOM Video Elements
    var vid = angular.element(document.getElementById('#bgVid'))
    var prizeVid = angular.element(document.getElementById('#prizeVid'))

    var setNewTimer = function(round){
      $scope.timer = new Timer(round.time)
      return round;
    }

    var showPrize = function(round){
      $scope.prize = round.prize;
      return playHelpers.playVideo(prizeVid).then(function(vid){
        $scope.prize = undefined;
        return round;
      }, function(err){
        return $q.reject(err)
      })
    }

    var playVideo = function(round){
      return playHelpers.playVideo(vid).then(function(){
        return round;
      }, function(err){
        return $q.reject(err)
      })
    }
    
    var setVideo = function(round){
      $scope.video = round.video
      return playHelpers.loadVideo(vid)
        .then(function(vid){
          return round;
        }, function(err){
          return $q.reject(err);
        })
    }

    var createRound = function(game, rendition, i){
      var round = _.find(_.values(game.rounds), {pos: i}) 
      round.video = rendition.videos[round.word]
      return round
    }

    // nextRound handles control flow for the whole transiiton process
    this.nextRound = function(){
      var i = $scope.round.pos + 1;
      var next = createRound($scope.rendition.game, $scope.rendition, i);

      var prizeFinished = showPrize(next);
      var videoLoaded = setVideo(next);
      $scope.round = next;
      // TODO: this is ugly... dry it out? Make it a function? make it actually bind?
      $scope.card = $scope.round.card;

      return prizeFinished
        .then(videoLoaded)
        .then(playVideo)
        .then(setNewTimer)
    }

    // Setup Scope and first round
    $scope.timer;
    $scope.video;
    $scope.prize;
    $scope.rendition = rendition;
    $scope.round = createRound(rendition.game, rendition, 1);
    $scope.card = $scope.round.card;
    setVideo($scope.round)
      .then(playVideo)
      .then(setNewTimer)
    
  })