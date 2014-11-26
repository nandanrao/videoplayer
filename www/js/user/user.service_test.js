describe('User', function(){

  var User,
      fb,
      $firebase,
      $q

  beforeEach(function(){
    $firebase = {

    }

    // TODO: create a contemporary firebase mock and a $firebase mock

    fb = {
      users: {
        push: sinon.stub(),
        orderByChild: sinon.stub().returns({
          equalTo: sinon.stub().returns({
            on: sinon.stub()
          })
        })
      }
    }

    module('ananasTest', function($provide){
      $provide.value('fb', fb)
      $provide.value('$firebase', $firebase)
    })

  });

  beforeEach(inject(function (_User_, _fb_, _$firebase_, _$q_){
    User = _User_;
    $q = _$q_;
  }))

  it('findByAuth throws a typeerror if not provided a string', function(){
    var obj = {
      google: {}
    };
    var str = 'google';
    User.findByAuth.bind(this, obj, obj).should.Throw()
    User.findByAuth.bind(this, str, obj).should.not.Throw()
  })


})