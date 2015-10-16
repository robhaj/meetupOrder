myApp.controller("PizzaController", ["$scope", "meetupFactory", "$rootScope", function($scope, meetupFactory, $rootScope) {
  $scope.eventURL = "";
  $scope.eventInfo = {};

 $scope.findEvent = function() {
    console.log($scope.eventURL);
    $scope.eventID = $scope.eventURL.split("/").slice(-2,-1);
    console.log($scope.eventID);
     meetupFactory.getEvent($scope.eventID)
      .success(function(data){
      $scope.eventInfo = {
        name: data.results[0].name,
        description: data.results[0].description,
        attending: data.results[0].yes_rsvp_count,
        address_name: data.results[0].venue.name,
        address_street: data.results[0].venue.address_1,
        address_city: data.results[0].venue.city
      };
        console.log(data.results);
       console.log($scope.eventInfo);
      })
     .error(function(data) {
       console.log(error);
     });
   };
}]);

 // $scope.eventInfo = {
 //        name: data.results[0].name,
 //        description: data.results[0].description,
 //        attending: data.results[0].yes_rsvp_count,
 //        address_name: data.results[0].venue.name,
 //        address_street: data.results[0].venue.address_1,
 //        address_city: data.results[0].venue.city
 //      };

