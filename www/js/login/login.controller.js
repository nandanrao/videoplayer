angular.module('ananas')
  .controller('LoginCtrl', function (Auth, User){

    this.authLogin = function(authProvider){
      Auth.$authWithOAuthPopup(authProvider)
        .then(function(authObj){



          User.findByAuth(authProvider, authObj[authProvider].id)
            .then(function(results){


              console.log(results)
              // check if results have users


              User.create(authObj)
              .then(function(user){


                console.log('user created', user)
              }, function(err){
                console.log('user creation error', err)
              })


            }, function(err){
              // handle err
            })


            
        }, function(err){
          console.log('authentication error', err)
        })
    }

    this.logout = function(){
      Auth.$unauth();
    }
    
  })