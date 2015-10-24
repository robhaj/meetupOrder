myApp.controller("PizzaController", ["$scope", "$http", "meetupFactory", "$rootScope", function($scope, $http, meetupFactory, $rootScope) {
  $scope.eventURL = "";

  $scope.findEvent = function() {
    $scope.eventID = $scope.eventURL.split("/").slice(-2,-1).toString();
    meetupFactory.getEvent($scope.eventID)
    .success(function(data){

      $scope.eventInfo = {
        name: data.name,
        description: data.description,
        attending: data.yes_rsvp_count,
        address_name: data.venue.name,
        address_street: data.venue.address_1.split(',')[0],
        address_city: data.venue.city,
        lat: data.venue.lat,
        lon: data.venue.lon,
        zip_code: '',
        expected_ratio: parseFloat($scope.expectedRatio),
        user_email: $scope.email,
        user_password: $scope.password
      };

      $scope.getZip($scope.eventInfo);
    });
  };

  $scope.placeOrder = function(info) {
    return meetupFactory.placeOrder($scope.eventInfo);
  };

  $scope.getZip = function(eventInfo) {
    meetupFactory.getZip({lat: eventInfo.lat, lon: eventInfo.lon})
    .success(function(data){
      eventInfo.zip_code = data;
    });
  };
}]);
