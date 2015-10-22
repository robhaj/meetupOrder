myApp.controller("PizzaController", ["$scope", "$http", "meetupFactory", "$rootScope", function($scope, $http, meetupFactory, $rootScope) {
  $scope.eventURL = "";
  $scope.eventInfo = {};

 $scope.findEvent = function() {
    $scope.eventID = $scope.eventURL.split("/").slice(-2,-1).toString();
    console.log($scope.eventID);
     meetupFactory.getEvent($scope.eventID)
      .success(function(data){
        console.log(data);

      $scope.eventInfo = {
        name: data.name,
        description: data.description,
        attending: data.yes_rsvp_count,
        address_name: data.venue.name,
        address_street: data.venue.address_1.split(',')[0],
        address_city: data.venue.city,
        lat: data.venue.lat,
        lon: data.venue.lon,
        zip_code: ''
      };

      $scope.getZip();
       // .error(function(data) {
       //   console.log(error);
      console.log($scope.eventInfo);
     });
   };

$scope.getZip = function() {
    meetupFactory.getZip({lat: $scope.eventInfo.lat, lon: $scope.eventInfo.lon})
      .success(function(data){
        $scope.eventInfo.zip_code = data;

        // $scope.eventInfo.zip_code = $scope.zip;
       // .error(function(data) {
       //   console.log(error);
     });
   };



}]);




    // meetupFactory.getZip({lat: $scope.eventInfo.lat, lon: $scope.eventInfo.lon});
