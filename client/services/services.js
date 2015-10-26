myApp.factory("meetupFactory", ["$http", function($http) {
  var object = {};

  object.getEvent = function(eventID) {
    return $http.get('/data/'+eventID);
  };

  object.getZip = function(coordinates) {
    return $http.post('/getZip', coordinates);
  };
  
  object.placeOrder = function(info) {
    return $http.post('/data', info);
  };
  return object;
}]);
