var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "partails/home.html",
    controller: "PizzaController"
  })
  .otherwise({
    redirectTo: "/"
  });
});
