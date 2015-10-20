var myApp = angular.module("myApp", ["ngRoute"]);
// var ensureAuthenticated = require('../auth/auth.js');

myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "./views/index.html",
    controller: "PizzaController"
  })
  .otherwise({
    redirectTo: "/"
  });
});