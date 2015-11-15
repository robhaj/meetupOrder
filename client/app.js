var myApp = angular.module("myApp", ["ngRoute", "ui.bootstrap"]);

myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "partials/home.html",
    controller: "PizzaController"
  })
  .otherwise({
    redirectTo: "/"
  });
});
