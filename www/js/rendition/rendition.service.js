angular.module('ananas')
  .factory('Rendition', function($q, fb, $firebase, $FirebaseObject){
    var Rendition = fb.renditions

      // Instance methods go on firebase object factory
    var RenditionFactory = $FirebaseObject.$extendFactory({
      getUser: function(){
        return $firebase(fb.users.child(this.user)).$asObject().$loaded()
      },
      getGame: function(){
        return $firebase(fb.games.child(this.game)).$asObject().$loaded()
      },
      populate: function(){
        var self = this;

        console.log($q)
        
        var users = $q(function (resolve, reject){
          self.getUser().then(function(user){
            self._user = user
            resolve()
          }, reject)
        })

        var game = $q(function (resolve, reject){
          self.getGame().then(function(game){
            self._game = game;
            resolve()
          }, reject)
        })

        return $q.all([users, game])
      }
    })
    
    // Class methods!

    Rendition.create = function (data){
      // this is a shitty way to check inheritence...
      if (typeof data.game.$inst !== 'function' || typeof data.user.$inst !== 'function') {
        throw new TypeError('game/user must be $firebase object')
      }
      data = _.cloneDeep(data);
      data.game = data.game.$inst().$ref().key();
      data.user = data.user.$inst().$ref().key();
      var ref = Rendition.push(data)
      var obj = $firebase(ref, {objectFactory: RenditionFactory})
      return obj.$asObject().$loaded().then(function(obj){
        return obj.populate()
      })
    };


    Rendition.findById = function(id){
      return $firebase(Rendition.child(id), {objectFactory: RenditionFactory})
        .$asObject().$loaded().then(function(obj){
          return obj.populate()
      })
    }

    // Rendition.find = function(obj){
    //   var keys = _.keys(obj); 
    //   var key = keys[0];
    //   var arr = [];
    //   Rendition.orderByChild(key).equalTo(obj[key]).on('child_added', function(snap){
    //     var promise = $firebase(snap.ref(), {objectFactory: RenditionFactory}).$asObject.$loaded()
    //     arr.push(promise)
    //   }) 
    //   return $q.all(arr)
    // }

    return Rendition
  })