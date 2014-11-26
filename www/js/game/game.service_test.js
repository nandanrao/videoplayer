describe('Service: Game', function(){

  var fb,
      $firebase,
      Game

  var seed = {
    name: 'name',
    rounds: [
    ]
  }

  beforeEach(function(){

    $firebase = sinon.stub().returns({
      $asObject: sinon.stub().returns({
        $loaded: sinon.stub().returns(
          new Promise(sinon.spy())
        )
      })
    })

    fb = {
      games: {
        child: sinon.spy(),
        push: sinon.spy(),
      }
    }

    module('ananasTest', function($provide){
      $provide.value('fb', fb);
      $provide.value('$firebase', $firebase)
    })
  })

  beforeEach(inject(function (_Game_){
    Game = _Game_;
  }))

  it('pushes a game object onto the fb ref', function(){
    Game.create(seed)
    fb.games.push.should.have.been.calledWith(seed)
  })

})