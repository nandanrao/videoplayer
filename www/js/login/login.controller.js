angular.module('ananas')
  .controller('LoginCtrl', function (Auth, User){

    this.authLogin = function(authProvider){
      var authObj;
      Auth.$authWithOAuthPopup(authProvider)
        .then(function(authObj){
          authObj = authObj;
          return User.findByAuth(authProvider, authObj)
        })
        .then(function(results){
          if (!results){
            return User.create(authProvider, authObj)
                      .then(function(user){
                        console.log('created user', user)
                        return user;
                      })
          }
          else {
            console.log('already a user', results) 
            return results;
          }
        }, function(err){
          // handle err
          console.log(err)
        })
    }

    this.logout = function(){
      Auth.$unauth();
    }
    
  })