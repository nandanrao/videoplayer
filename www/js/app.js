// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ananas', [
  'ionic',
  'ui.router',
  'firebase',
  'ngTemplates'
])
.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider
    .otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: 'home/home.html'
    })
    .state('login', {
      url: '/login/:redirect',
      controller: 'LoginCtrl as login',
      templateUrl: 'login/login.html',
    })
    .state('play', {
      url: '/play/:id',
      controller: 'PlayCtrl as play',
      templateUrl: 'play/play.html',
      resolve: {
        'rendition': ['Rendition', '$stateParams', function(Rendition, $stateParams){
          return Rendition.findById($stateParams.id)
        }]
      }
    })
    
})
.run(function($ionicPlatform, $state, $location, $rootScope, Auth) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) { 
      StatusBar.styleDefault(); 
    }
  });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams){
    if (!Auth.$getAuth()){
      event.preventDefault()
      var href = $state.href(toState, toParams)
      if(toState.name === 'login'){
        href = '/'
      };
      href = encodeURIComponent(href)
      $location.path('login/' + href)
    }
  })

})
