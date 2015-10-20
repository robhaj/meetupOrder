myApp.factory("meetupFactory", ["$http", function($http) {
  var object = {};
  meetupkey = '5a783fa7f76117147b97d1f524be';

 object.getEvent = function(eventID) {
   return $http.jsonp('https://api.meetup.com/2/events?callback=JSON_CALLBACK&key='+meetupkey+'&event_id='+eventID+'&sign=true');
 };
    return object;
}]);
