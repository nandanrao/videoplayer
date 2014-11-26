
module.exports = function ( karma ) {

  karma.set({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: './',

    /**
     * Filled by the task `gulp karma-conf`
     */
    files: [
    // assets
    {pattern: 'www/img/**/*', watched: false, included: false, served: true},
    // testfiles:js
      'www/lib/bower_components/lodash/dist/lodash.compat.js',
      'www/lib/bower_components/angular/angular.js',
      'www/lib/bower_components/angular-ui-router/release/angular-ui-router.js',
      'www/lib/bower_components/firebase/firebase.js',
      'www/lib/bower_components/angularfire/dist/angularfire.js',
      'www/lib/bower_components/jdataview/dist/browser/jdataview.js',
      'www/lib/bower_components/bacon/dist/Bacon.js',
      'www/lib/bower_components/angular-animate/angular-animate.js',
      'www/lib/bower_components/angular-sanitize/angular-sanitize.js',
      'www/lib/bower_components/collide/collide.js',
      'www/lib/bower_components/ionic/js/ionic.js',
      'www/lib/bower_components/ionic/js/ionic-angular.js',
      'www/lib/bower_components/angular-mocks/angular-mocks.js',
      'www/lib/bower_components/mockfirebase/browser/mockfirebase.js',
      'www/lib/mocks/stateMock.js',
      'www/lib/mocks/test.js',
      'www/lib/vendor/gify/gify.js',
      'www/lib/templates/templates.js',
      'www/js/app.js',
      'www/js/user/user.service.js',
      'www/js/rendition/rendition.service.js',
      'www/js/play/play.helpers.service.js',
      'www/js/play/play.controller.js',
      'www/js/login/login.controller.js',
      'www/js/home/home.controller.js',
      'www/js/game/game.service.js',
      'www/js/components/fb.js',
      'www/js/auth/auth.js',
      'www/js/components/fb_test.js',
      'www/js/game/game.service_test.js',
      'www/js/login/login.controller_test.js',
      'www/js/play/play.controller_test.js',
      'www/js/play/play.helpers.service_test.js',
      'www/js/rendition/rendition.service_test.js',
      'www/js/user/user.service_test.js'
      // endinject
      ,
      'www/**/*.html',
      ],

    frameworks: [ 'mocha', 'chai-sinon'],
    plugins: [ 'karma-mocha', 'karma-chai-sinon', 'karma-chrome-launcher', 'karma-ng-html2js-preprocessor'],

    preprocessors: {
      '**/*.html': 'ng-html2js',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'www/js/',
      moduleName: 'templates'
    },
    /**
     * How to report, by default.
     */
    reporters: 'progress',

    /**
     * Show colors in output?
     */
    colors: true,

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9099,
    runnerPort: 9100,
    urlRoot: '/',

    /**
     * Disable file watching by default.
     */
    autoWatch: true,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9099/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'Chrome'
    ]
  });
};