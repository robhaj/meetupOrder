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

  object.placeOrder = function(info) {
    console.log(info);
    return $http.post('/data', info);
  };
  return object;
}]);
