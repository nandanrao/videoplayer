(function(module) {
try { module = angular.module("ngTemplates"); }
catch(err) { module = angular.module("ngTemplates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("www/index.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width\">\n" +
    "    <title></title>\n" +
    "\n" +
    "    <link href=\"css/ionic.app.css\" rel=\"stylesheet\">   \n" +
    "\n" +
    "    <!-- ionic/angularjs js -->\n" +
    "    <script src=\"lib/ionic/js/ionic.bundle.js\"></script>\n" +
    "\n" +
    "    <!-- cordova script (this will be a 404 during development) -->\n" +
    "    <script src=\"cordova.js\"></script>\n" +
    "  \n" +
    "    <!-- bower:js -->\n" +
    "    <script src=\"lib/bower_components/lodash/dist/lodash.compat.js\"></script>\n" +
    "    <script src=\"lib/bower_components/angular/angular.js\"></script>\n" +
    "    <script src=\"lib/bower_components/angular-ui-router/release/angular-ui-router.js\"></script>\n" +
    "    <script src=\"lib/bower_components/firebase/firebase.js\"></script>\n" +
    "    <script src=\"lib/bower_components/angularfire/dist/angularfire.js\"></script>\n" +
    "    <script src=\"lib/bower_components/jdataview/dist/browser/jdataview.js\"></script>\n" +
    "    <script src=\"lib/bower_components/bacon/dist/Bacon.js\"></script>\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <!-- vendor:js -->\n" +
    "    <script src=\"lib/vendor/gify/gify.js\"></script>\n" +
    "    <!-- endinject -->\n" +
    "\n" +
    "    <!-- inject:js --> \n" +
    "    <script src=\"lib/templates/templates.js\"></script> \n" +
    "    <script src=\"js/app.js\"></script> \n" +
    "    <script src=\"js/user/user.js\"></script> \n" +
    "    <script src=\"js/rendition/rendition.service.js\"></script> \n" +
    "    <script src=\"js/play/play.helpers.service.js\"></script> \n" +
    "    <script src=\"js/play/play.controller.js\"></script> \n" +
    "    <script src=\"js/login/login.controller.js\"></script> \n" +
    "    <script src=\"js/game/game.service.js\"></script> \n" +
    "    <script src=\"js/components/fb.js\"></script> \n" +
    "    <script src=\"js/auth/auth.js\"></script> \n" +
    "    <!-- endinject -->\n" +
    "     \n" +
    "  </head>\n" +
    "  <body ng-app=\"ananas\">\n" +
    "  <div ui-view=''></div>\n" +
    "  </body>\n" +
    "</html>\n" +
    "\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("ngTemplates"); }
catch(err) { module = angular.module("ngTemplates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("www/js/home/home.html",
    "");
}]);
})();

(function(module) {
try { module = angular.module("ngTemplates"); }
catch(err) { module = angular.module("ngTemplates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("www/js/login/login.html",
    "<div id=\"pg-login\">\n" +
    "    <h1>login</h1>\n" +
    "    <button ng-click=\"google()\">google</button>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("ngTemplates"); }
catch(err) { module = angular.module("ngTemplates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("www/js/play/play.html",
    "");
}]);
})();

(function(module) {
try { module = angular.module("ngTemplates"); }
catch(err) { module = angular.module("ngTemplates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("www/lib/bower_components/bacon/browsertest/mocha.runner.html",
    "<html>\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <title>Mocha Tests</title>\n" +
    "  <link rel=\"stylesheet\" href=\"../node_modules/mocha/mocha.css\" />\n" +
    "  <script src=\"../node_modules/mocha/mocha.js\"></script>\n" +
    "  <script src=\"../lib/jquery.js\"></script>\n" +
    "  <script>\n" +
    "    mocha.setup('bdd');\n" +
    "  </script>\n" +
    "  <script>\n" +
    "    if (location.hash === '#testem')\n" +
    "      document.write('<script src=\"/testem.js\"></'+'script>')\n" +
    "  </script>\n" +
    "  <script src=\"bundle.js\"></script>\n" +
    "  <script>\n" +
    "    $(function() {\n" +
    "      if (window.mochaPhantomJS) { \n" +
    "        mochaPhantomJS.run(); \n" +
    "      } else {\n" +
    "        mocha.run(); \n" +
    "      }\n" +
    "    })\n" +
    "  </script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <div id=\"mocha\">\n" +
    "  </div>\n" +
    "  <div id=\"bacon-dom\"></div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("ngTemplates"); }
catch(err) { module = angular.module("ngTemplates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("www/lib/bower_components/bacon/examples/examples.html",
    "<!--\n" +
    "  To view these examples live, visit:\n" +
    "  http://htmlpreview.github.io/?https://rawgit.com/baconjs/bacon.js/master/examples/examples.html\n" +
    " -->\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
    "    <script src=\"../lib/jquery.js\"></script>\n" +
    "    <script src=\"../lib/underscore.js\"></script>\n" +
    "    <script src=\"../dist/Bacon.js\"></script>\n" +
    "    <script>\n" +
    "      function isEmpty(s) { return s.length == 0 }\n" +
    "\n" +
    "      function always(value) { return function() { return value }}\n" +
    "\n" +
    "      function keyCodeIs(keyCode) { \n" +
    "        return function(event) { return event.keyCode == keyCode }\n" +
    "      }\n" +
    "\n" +
    "      function keyDownEvents(keyCode) { \n" +
    "        return $(document).asEventStream(\"keydown\").filter(keyCodeIs(keyCode))\n" +
    "      }\n" +
    "\n" +
    "      function keyUpEvents(keyCode) { \n" +
    "        return $(document).asEventStream(\"keyup\").filter(keyCodeIs(keyCode))\n" +
    "      }\n" +
    "\n" +
    "      function keyStateProperty(keyCode) { \n" +
    "        return keyDownEvents(keyCode).map(always(\"DOWN\"))\n" +
    "          .merge(keyUpEvents(keyCode).map(always(\"UP\")))\n" +
    "          .toProperty(\"UP\")\n" +
    "      }\n" +
    "\n" +
    "      $(function() {\n" +
    "        // Simple click example\n" +
    "        $(\"#clikme\")\n" +
    "          .asEventStream(\"click\")\n" +
    "          .subscribe(function(event) { alert(\"mmmm... bacon!\") })\n" +
    "\n" +
    "        // Combinators example\n" +
    "        keyStateProperty(32)\n" +
    "          .onValue(function(value) { $(\"#spacebar-value\").text(value) })\n" +
    "\n" +
    "        // Enable/disable example\n" +
    "        $(\"#enabling input\")\n" +
    "          .asEventStream(\"keyup\")\n" +
    "          .map(function(event) { return $(event.target).val() })\n" +
    "          .toProperty(\"\")\n" +
    "          .map(isEmpty)\n" +
    "          .assign($(\"#enabling button\"), \"attr\", \"disabled\")\n" +
    "\n" +
    "        // Echo example\n" +
    "        $(\"#echo input\")\n" +
    "          .asEventStream(\"keyup\")\n" +
    "          .map(function(event) { return $(event.target).val() })\n" +
    "          .toProperty(\"\")\n" +
    "          .assign($(\"#echo .output\"), \"text\")\n" +
    "\n" +
    "        // Combination lock example\n" +
    "        function selectElementValue(el) {\n" +
    "          function getValue() {\n" +
    "            return el.val()\n" +
    "          }\n" +
    "          return el.asEventStream(\"change\")\n" +
    "            .map(getValue)\n" +
    "            .toProperty(getValue())\n" +
    "        }\n" +
    "        Bacon.combineAsArray(\n" +
    "          $(\"#combo select\").map(function() {\n" +
    "            return selectElementValue($(this)).map(parseInt)\n" +
    "          }).get()\n" +
    "        ).map(_.isEqual, [1,8,0])\n" +
    "         .toProperty()\n" +
    "         .not()\n" +
    "         .assign($(\"#combo button\"), \"attr\", \"disabled\")\n" +
    "        $(\"#combo button\").click(function() { $(\"#combo .vault-contents\").slideDown() })\n" +
    "\n" +
    "        // Strikeout (skip/take) example\n" +
    "        function strikeout () {\n" +
    "          $(\"#batter-up .ump-call\").text(\"Strike three, you're out!\") \n" +
    "        }\n" +
    "\n" +
    "        $(\"#batter-up button\")\n" +
    "          .asEventStream(\"click\").skip(2).take(1).onValue(strikeout)\n" +
    "\n" +
    "      })\n" +
    "    </script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <h1>bacon.js example page</h1>\n" +
    "    <div>\n" +
    "      <h2>Simplest example:</h2>\n" +
    "      <span id=\"clikme\">click me</span>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "      <h2>Combinators example:</h2>\n" +
    "      SPACEBAR value=<span id=\"spacebar-value\"></span>\n" +
    "    </div>\n" +
    "    <div id=\"enabling\">\n" +
    "      <h2>Enable/disable example:</h2>\n" +
    "      <input type=\"text\" placeholder=\"required field\">\n" +
    "      <button>Don't push me</button>\n" +
    "    </div>\n" +
    "    <div id=\"echo\">\n" +
    "      <h2>Echo example:</h2>\n" +
    "      <input type=\"text\">\n" +
    "      <span class=\"output\"></span>\n" +
    "    </div>\n" +
    "    <div id=\"combo\">\n" +
    "      <h2>Combination lock:</h2>\n" +
    "      <select>\n" +
    "        <option>0</option>\n" +
    "        <option>1</option>\n" +
    "        <option>2</option>\n" +
    "        <option>3</option>\n" +
    "        <option>4</option>\n" +
    "        <option>5</option>\n" +
    "        <option>6</option>\n" +
    "        <option>7</option>\n" +
    "        <option>8</option>\n" +
    "        <option selected=\"selected\">9</option>\n" +
    "      </select>\n" +
    "      <select>\n" +
    "        <option>0</option>\n" +
    "        <option>1</option>\n" +
    "        <option>2</option>\n" +
    "        <option>3</option>\n" +
    "        <option>4</option>\n" +
    "        <option>5</option>\n" +
    "        <option>6</option>\n" +
    "        <option>7</option>\n" +
    "        <option>8</option>\n" +
    "        <option selected=\"selected\">9</option>\n" +
    "      </select>\n" +
    "      <select>\n" +
    "        <option>0</option>\n" +
    "        <option>1</option>\n" +
    "        <option>2</option>\n" +
    "        <option>3</option>\n" +
    "        <option>4</option>\n" +
    "        <option>5</option>\n" +
    "        <option>6</option>\n" +
    "        <option>7</option>\n" +
    "        <option>8</option>\n" +
    "        <option selected=\"selected\">9</option>\n" +
    "      </select>\n" +
    "      <button>Open vault</button>\n" +
    "      <small>Hint: Try combo <b>180</b></small>\n" +
    "      <div class=\"vault-contents\" style=\"display:none\">\n" +
    "        <p style=\"font-style:italic\">“Your bacon, sir.” <span style=\"font-weight:bold; color:red\">≈</span></p>\n" +
    "        <p><small>Fun fact: It takes approximately 180 seconds to microwave two slices of bacon</small></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div id=\"batter-up\">\n" +
    "      <h2>Batter up! (take/skip example):</h2>\n" +
    "      <button>Swing</button>\n" +
    "      <span class=\"ump-call\" style=\"font-weight:bold\"></span>\n" +
    "      <p style=\"font-style:italic\">♪♫  ...for it's one, two, three strikes you're out at the old ball game ♪♫ </p>\n" +
    "    </div>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("ngTemplates"); }
catch(err) { module = angular.module("ngTemplates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("www/lib/bower_components/bacon/examples/sliding_window.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>Sliding Windows Example</title>\n" +
    "  <script src=\"http://d3js.org/d3.v3.min.js\"></script>\n" +
    "  <script src=\"../dist/Bacon.js\"></script>\n" +
    "  <style>\n" +
    "    .chart rect {\n" +
    "      fill: steelblue;\n" +
    "      stroke: white;\n" +
    "    }\n" +
    "  </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <script>  \n" +
    "  \n" +
    "  // The d3 setup. Skip further down for the bacon-powered bit\n" +
    "  // http://mbostock.github.com/d3/tutorial/bar-2.html\n" +
    "  \n" +
    "  var d_len = 33,\n" +
    "      w = 20,\n" +
    "      h = 80;\n" +
    "      \n" +
    "  var x = d3.scale.linear()\n" +
    "      .domain([0, 1])\n" +
    "      .range([0, w]);\n" +
    "  \n" +
    "  var y = d3.scale.linear()\n" +
    "      .domain([0, 100])\n" +
    "      .rangeRound([0, h]);\n" +
    "  \n" +
    "  var chart = d3.select(\"body\").append(\"svg\")\n" +
    "      .attr(\"class\", \"chart\")\n" +
    "      .attr(\"width\", w * d_len - 1)\n" +
    "      .attr(\"height\", h);\n" +
    "    \n" +
    "  chart.append(\"line\")\n" +
    "      .attr(\"x1\", 0)\n" +
    "      .attr(\"x2\", w * d_len)\n" +
    "      .attr(\"y1\", h - 0.5)\n" +
    "      .attr(\"y2\", h - 0.5)\n" +
    "      .style(\"stroke\", \"#000\");\n" +
    "    \n" +
    "  function redraw(data) {\n" +
    "    var rect = chart.selectAll(\"rect\")\n" +
    "        .data(data, function(d) { return d.time; });\n" +
    "  \n" +
    "    rect.enter().insert(\"rect\", \"line\")\n" +
    "        .attr(\"x\", function(d, i) { return x(i + 1) - .5; })\n" +
    "        .attr(\"y\", function(d) { return h - y(d.value) - .5; })\n" +
    "        .attr(\"width\", w)\n" +
    "        .attr(\"height\", function(d) { return y(d.value); })\n" +
    "      .transition()\n" +
    "        .duration(1000)\n" +
    "        .attr(\"x\", function(d, i) { return x(i) - .5; });\n" +
    "  \n" +
    "    rect.transition()\n" +
    "        .duration(1000)\n" +
    "        .attr(\"x\", function(d, i) { return x(i) - .5; });\n" +
    "  \n" +
    "    rect.exit().transition()\n" +
    "        .duration(1000)\n" +
    "        .attr(\"x\", function(d, i) { return x(i - 1) - .5; })\n" +
    "        .remove();\n" +
    "  }\n" +
    "  \n" +
    "  // The Bacon awesomeness\n" +
    "  \n" +
    "  var initial = {\n" +
    "    time: 1297110663,\n" +
    "    value: 70\n" +
    "  }\n" +
    "  \n" +
    "  function walk(prev, rand) {\n" +
    "    return {\n" +
    "      time: prev.time + 1,\n" +
    "      value: ~~Math.max(10, Math.min(90, prev.value + 10 * (rand - .5)))\n" +
    "    };\n" +
    "  }\n" +
    "  \n" +
    "  function rand() {\n" +
    "    return new Bacon.Next(Math.random());\n" +
    "  }\n" +
    "  \n" +
    "  Bacon.interval(1500).map(Math.random).scan(initial, walk).slidingWindow(33).onValue(redraw);\n" +
    "  \n" +
    "  </script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("ngTemplates"); }
catch(err) { module = angular.module("ngTemplates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("www/lib/bower_components/bacon/performance/performance.html",
    "<!--\n" +
    "  To view these examples live, visit:\n" +
    "  http://htmlpreview.github.io/?https://raw.github.com/baconjs/bacon.js/master/examples/examples.html\n" +
    " -->\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
    "    <script src=\"performance.js\"></script>\n" +
    "    <script>\n" +
    "\n" +
    "\n" +
    "    </script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);
})();
