myApp.factory("meetupFactory", ["$http", function($http) {
  var object = {};

 object.getEvent = function(eventID) {
  console.log(eventID);
   return $http.get('/data/'+eventID);
 };

  object.getZip = function(coordinates) {
    console.log(coordinates);
   return $http.post('/getZip', coordinates);
 };
    return object;
}]);

// key=ucBeHVPTcKDldQGHC1jbK9l0RuhTuuxE&



