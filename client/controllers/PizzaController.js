myApp.controller("PizzaController", ["$scope", "$http", "meetupFactory", "$rootScope", function($scope, $http, meetupFactory, $rootScope) {
  $scope.eventURL = "";
  $scope.eventInfo = {};

 $scope.findEvent = function() {
    $scope.eventID = $scope.eventURL.split("/").slice(-2,-1).toString();
    console.log($scope.eventID);
     meetupFactory.getEvent($scope.eventID)
      .success(function(data){
        console.log(data);
      // // $scope.zipget = meetupFactory.getZip(data.results[0].venue.lat, data.results[0].venue.lon);
      // // console.log($scope.zipget);

      $scope.eventInfo = {
        name: data.name,
        description: data.description,
        attending: data.yes_rsvp_count,
        address_name: data.venue.name,
        address_street: data.venue.address_1.split(',')[0],
        address_city: data.venue.city
        // zip_code: $scope.zip
      };
      console.log($scope.eventInfo);
      //  // $http.post('/data', $scope.eventInfo)
      //  //  .success(function(data){
      //  //  })
      //  //    .error(function(data){
      //  //      console.log(data);
      //  //    });
     //  // })
     // .error(function(data) {
     //   console.log(error);
     });
   };
}]);
