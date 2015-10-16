myApp.factory("meetupFactory", ["$http", function($http) {

  var object = {};
  meetupkey = '5a783fa7f76117147b97d1f524be';

 object.getEvent = function(eventID) {
   return $http.jsonp('https://api.meetup.com/2/events?callback=JSON_CALLBACK&key='+meetupkey+'&event_id='+eventID+'&sign=true');
 };


// $http({
//     method: 'GET',
//     url: 'https://api.meetup.com/2/events?key='+meetupkey+'&event_id='+eventID+'&sign=true',
//     headers: {
//         'Content-type': 'application/json'
//     }
// });

// object.getEvent = function(eventID) {
//   $http({
//     method: 'GET',
//     url: 'https://api.meetup.com/2/events?key='+meetupkey+'&event_id='+eventID+'&sign=true',
//     headers: {
//         'Content-type': 'application/json'
//     }
//   });
//  };

 //  object.similarRequest = function(id) {
 //    return $http.jsonp('http://api.themoviedb.org/3/movie/'+id+'/similar?api_key='+tmdbKey+'&callback=JSON_CALLBACK');
 //  };

 // //Library Calls

 // object.getL = function() {
 //   return $http.get('/api/movies');
 // };

 // object.postL = function(movie) {
 //   return $http.post('/api/movies', movie);
 // };

 // object.deleteL = function(movie) {
 //   return $http.delete('/api/movies/' +movie._id);
 // };

    return object;
}]);
