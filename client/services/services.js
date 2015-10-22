myApp.factory("meetupFactory", ["$http", function($http) {
  var object = {};
  // meetupkey = '5a783fa7f76117147b97d1f524be';

 // object.getEvent = function(eventID) {
 //   return $http.jsonp('https://api.meetup.com/2/events?callback=JSON_CALLBACK&key='+meetupkey+'&event_id='+eventID+'&sign=true');
 // };

 object.getEvent = function(eventID) {
  console.log(eventID);
   return $http.get('/data/'+eventID);
 };

 //  object.getZip = function(eventID) {
 //   return $http.get('/getZip');
 // };

 // object.getZip = function(lat, lon) {
 //  return $http.jsonp('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon+'&callback=JSON_CALLBACK');
 // };

// http://nominatim.openstreetmap.org/reverse?format=json&lat=51.0475&lon=3.5323&zoom=18&addressdetails=1

 // object.getZip = function(lat, lon) {
 //  return $http.jsonp('http://nominatim.openstreetmap.org/reverse?&format=json&lat='+lat+'&lon='+lon+'&zoom=18&addressdetails=1');
 // };

    return object;
}]);

// key=ucBeHVPTcKDldQGHC1jbK9l0RuhTuuxE&



