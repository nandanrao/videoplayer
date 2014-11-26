describe('Ctrl: Play', function(){

  var PlayCtrl,
      game,
      playHelpers,
      playPromise,
      playStub,
      loadPromise,
      loadStub,
      $q,
      $scope,
      Timer

  var word1 = {
    word: 'word1',
    time: 1,
    card: 'word1.png',
    pos: 1,
    prize: 'prize1.mp4'
  }

  var word2 = {
    word: 'word2',
    time: 2,
    card: 'word2.png',
    pos: 2,
    prize: 'prize2.m4'
  }

  var rendition = {
    game: {
      rounds: {
        word1: word1,
        word2: word2
      }
    },
    videos: {
      word1: 'word1.mp4',
      word2: 'word2.mp4'
    }
  }

  beforeEach(module('ananasTest'))

  beforeEach(inject(function($controller, $rootScope, _$q_){
    $q = _$q_;
    $scope = $rootScope.$new();

    playPromise = $q.defer();
    loadPromise = $q.defer();
    playStub = sinon.stub();
    loadStub = sinon.stub();
    playHelpers = {};
    playHelpers.playVideo = playStub.returns(loadPromise.promise);
    playHelpers.loadVideo = loadStub.returns(loadPromise.promise);

    Timer = sinon.spy()

    PlayCtrl = $controller('PlayCtrl', {
      rendition : rendition,
      $scope: $scope,
      game: game,
      playHelpers: playHelpers,
      Timer: Timer
    })
  }))
  
  it('has a nextRound method that returns a promise', function(){
    PlayCtrl.nextRound().should.have.property('then')
  })

  it('has a nextRound method that sets a prize \
    and takes it away when video prize video finishes', function(){
    should.not.exist($scope.prize)
    PlayCtrl.nextRound()
    should.exist($scope.prize)
    playPromise.resolve();
    loadPromise.resolve();
    $scope.$apply();
    should.not.exist($scope.prize)
  })

  it('has a nextRound method that changes the card url', function(){
    $scope.card.should.equal(word1.card)
    PlayCtrl.nextRound()
    playPromise.resolve();
    loadPromise.resolve();
    $scope.$apply();
    $scope.card.should.equal(word2.card)
  })

  it('has a nextRound method that changes main video url', function(){
    $scope.video.should.equal(rendition.videos['word1'])
    PlayCtrl.nextRound()
    playPromise.resolve();
    loadPromise.resolve();
    $scope.$apply();
    $scope.video.should.equal(rendition.videos['word2'])
  })

  it('has a nextRound method that sets scope.round to the new round', function(){
    $scope.round.word.should.equal(word1.word)
    PlayCtrl.nextRound()
    playPromise.resolve();
    loadPromise.resolve();
    $scope.$apply();
    $scope.round.word.should.equal(word2.word)
  })

  it('is a dumb test that tests playvideo being called thrice', function(){
    PlayCtrl.nextRound()
    playPromise.resolve();
    loadPromise.resolve();
    $scope.$apply();
    playHelpers.playVideo.should.have.been.calledThrice
  })

  it('does not play the bg video until it has loaded', function(){
    playHelpers.playVideo.should.not.have.been.called
    loadPromise.resolve();
    $scope.$apply();
    playHelpers.playVideo.should.have.been.called
  })

  it('has a nextRound method that creates a new timer of the correct \
    amount of time', function(){
    playPromise.resolve();
    loadPromise.resolve();
    $scope.$apply();
    Timer.should.have.been.calledWith(1)

    PlayCtrl.nextRound()
    $scope.$apply();
    Timer.should.have.been.calledWith(2)
  })

  // TODO: Handle errors!!!

})