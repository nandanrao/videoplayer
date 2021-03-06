angular.module('ananas')
  .factory('User', function ($q, fb, $firebase){
    var User = {};

    User.ref = fb.users;

    User.create = function(authProvider, authObj){
      var data = {};
      // TODO: check for syntax for other auth providers
      if (authProvider){
        data[authProvider] = authObj[authProvider];
        data[authProvider + '_id'] = authObj[authProvider].id;
        data.name = authObj[authProvider].displayName;
      }
      else {
        // put local login stuff here!
        throw new Error('we need an auth provider to login')
      }
      var ref = User.ref.push(data);
      var obj = $firebase(ref);
      return obj.$asObject().$loaded()
    }

    User.findByAuth = function(authProvider, authObj){
      var authId = authObj[authProvider].id;
      var deferred = $q.defer();
      if (typeof authProvider !== 'string'){
        throw new TypeError('authProvider should be a string!')
      }
      User.ref.orderByChild(authProvider + '_id').equalTo(authId)
        .on('value', function(snap){
          if (snap.numChildren() > 0){
            deferred.resolve($firebase(snap.ref()).$asObject().$loaded())  
          }
          else deferred.reject(authObj)
        })
      return deferred.promise
    }

    return User

  })