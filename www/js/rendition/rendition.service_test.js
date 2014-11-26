describe('Service: Rendition', function(){
  var fb,
      Rendition,
      $firebase,
      $FirebaseObject

  // var MockFirebase = mockfirebase.MockFirebase

  // Create mock $firebase object constructor?? 
  var seed = {
    game: {
      $inst: sinon.stub().returns({
        $ref: sinon.stub().returns({
          key: sinon.spy()
        })
      })
    },
    language: 'language',
    user: {
      $inst: sinon.stub().returns({
        $ref: sinon.stub().returns({
          key: sinon.spy()
        })
      })
    },
    videos: 'videos'
  }

  beforeEach(function(){

    var $FirebaseObjectMock = {
      $extendFactory: sinon.spy()
    }

    var $firebaseMock = sinon.stub().returns({
      $asObject: sinon.stub().returns({
        $loaded: sinon.stub().returns(
          new Promise(sinon.spy())
        )
      })
    })

    var fbMock = {
      renditions: {
        child: sinon.spy(),
        push: sinon.spy(),
      }
    }

    module('ananasTest', function($provide){
      $provide.value('fb', fbMock);
      $provide.value('$firebase', $firebaseMock);
      $provide.value('$FirebaseObject', $FirebaseObjectMock);
    })
  })

  beforeEach(inject(function(_Rendition_, _fb_, _$firebase_, _$FirebaseObject_){
    fb = _fb_;
    Rendition = _Rendition_;
    $firebase = _$firebase_;
    $FirebaseObject = _$FirebaseObject_;

  }))



  it('instantiates new rendition objects via a create method', function(){
    var promise = Rendition.create(seed)
    fb.renditions.push.should.have.been.calledOnce
  })

  it('create returns a promise', function(){
    var promise = Rendition.create(seed)
    promise.should.be.instanceof(Promise)
  })

  it('create throws error when not passed a $firebase object for game/user', function(){
    var seed = {
      game: {},
      language: '',
      user: {},
      videos: []
    }
    expect(Rendition.create.bind(this, seed))
      .to.throw(TypeError)
  })

  // How the hell are you going to test that mangled find function??
  // it('find returns a promise', function(){
    
  // })

})