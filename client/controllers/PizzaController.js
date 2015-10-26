myApp.controller("PizzaController", ["$scope", "$http", "meetupFactory", "$rootScope", function($scope, $http, meetupFactory, $rootScope) {
  $scope.eventURL = "";
<<<<<<< HEAD
  $scope.correctInfo = false;
  $scope.incorrectInfo = false;
  // $scope.eventInfo = {};
  // $scope.expectedRatio = '';


//Find specific event and create object

 $scope.findEvent = function() {
=======

  $scope.findEvent = function() {
>>>>>>> upstream/master
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
        expected_ratio: Number,
        user_email: String,
        user_password: String
      };

      $scope.getZip($scope.eventInfo);
<<<<<<< HEAD
      $scope.incorrectInfo = false;
       // .error(function(data) {
       //   console.log(error);
     });
   };
=======
    });
  };
>>>>>>> upstream/master

  $scope.placeOrder = function(info) {
    return meetupFactory.placeOrder($scope.eventInfo);
  };

  $scope.getZip = function(eventInfo) {
<<<<<<< HEAD
      meetupFactory.getZip({lat: eventInfo.lat, lon: eventInfo.lon})
        .success(function(data){
          eventInfo.zip_code = data;
          console.log(eventInfo);
         // .error(function(data) {
         //   console.log(error);
       });
     };

//Add DPC username and password + expected attendance ratio to event object

  $scope.addUser = function () {
    $scope.eventInfo.user_email = $scope.email;
    $scope.eventInfo.user_password = $scope.password;
    $scope.eventInfo.expected_ratio =  parseFloat($scope.expectedRatio);
  };

//Event info check

  $scope.confirmInfo = function () {
    $scope.correctInfo = true;
    };

  $scope.denyInfo = function () {
    $scope.incorrectInfo = true;
    $scope.eventInfo = null;
    $scope.eventURL = "";

  };


}]);





    // meetupFactory.getZip({lat: $scope.eventInfo.lat, lon: $scope.eventInfo.lon});
=======
    meetupFactory.getZip({lat: eventInfo.lat, lon: eventInfo.lon})
    .success(function(data){
      eventInfo.zip_code = data;
    });
  };
}]);
>>>>>>> upstream/master
