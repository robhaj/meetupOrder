myApp.controller("PizzaController", ["$scope", "$http", "meetupFactory", "$rootScope", function($scope, $http, meetupFactory, $rootScope) {
  $scope.eventURL = "";
  $scope.eventInfo = {};

 $scope.findEvent = function() {
    $scope.eventID = $scope.eventURL.split("/").slice(-2,-1);
     meetupFactory.getEvent($scope.eventID)
      .success(function(data){
      $scope.eventInfo = {
        name: data.results[0].name,
        description: data.results[0].description,
        attending: data.results[0].yes_rsvp_count,
        address_name: data.results[0].venue.name,
        address_street: data.results[0].venue.address_1.split(',')[0],
        address_city: data.results[0].venue.city
      };
       $http.post('/data', $scope.eventInfo)
        .success(function(data){
        })
          .error(function(data){
            console.log(data);
          });
      })
     .error(function(data) {
       console.log(error);
     });
   };
}]);
