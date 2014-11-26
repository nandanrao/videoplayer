describe('Ctrl: Login', function(){

  var LoginCtrl,
      Auth,
      User,
      $rootScope

  beforeEach(module('ananasTest'))

  beforeEach(inject(function ($controller, $q, _$rootScope_){
    $rootScope = _$rootScope_;
    Auth = {
      $authWithOAuthPopup: sinon.stub().returns($q(function(resolve, reject){
        resolve({
          google: {
            displayName: 'name'
          }
        })
      }))
    }

    User = {
      create: sinon.stub().returns($q.when()),
      findByAuth: sinon.stub().returns($q.when())
    }


    LoginCtrl = $controller('LoginCtrl', {
      Auth: Auth,
      User: User,
    })

  }))

  it('has a google fn that creates a user ... if one doesnt already exist', function(){
    LoginCtrl.authLogin('google')
    Auth.$authWithOAuthPopup.should.have.been.calledWith('google')
    $rootScope.$apply()
    User.create.should.have.been.called
  })

})