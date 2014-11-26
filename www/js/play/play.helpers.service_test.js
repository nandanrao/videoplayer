describe('Factory: playHelpers', function(){
  var playHelpers,
      vid,
      $rootScope,
      $timeout

  var gif = 'base/www/img/turkey.gif';

  beforeEach(function(){
    vid = angular.element('<video></video>')
    module('ananas')
  })

  beforeEach(inject(function (_playHelpers_, _$rootScope_, _$timeout_, $q){    
    playHelpers = _playHelpers_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
  }))

  it('has a playVideo fn that resolves on videos end event', function(done){
    playHelpers.playVideo(vid)
      .then(function(vid){
        vid.should.be.instanceof(angular.element)
        done()
      }, function(err){
        should.not.exist(err)
      })
    vid.triggerHandler('ended');
    $rootScope.$apply()
  })

  it('has a loadVideo fn that resolves with vid obj \
  when video is loaded', function(done){
    playHelpers.loadVideo(vid)
      .then(function(vid){
        vid.should.be.instanceof(angular.element)
        done()
      }, function(err){
        should.not.exist(err)
      });
    vid.triggerHandler('canplaythrough');
    $rootScope.$apply();
  })

})