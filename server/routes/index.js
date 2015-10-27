//dependencies
var express = require('express');
var router = express.Router();
var request = require("request");

var initWD = require ('../webdriver.js');

// constants
var meetupBaseURL = 'https://api.meetup.com/2/events?';
var googleBaseURL = 'http://maps.googleapis.com/maps/api/geocode/json?';

// config
var config = require('../_config');
var meetupkey = config.meetupkey;


// get meetup event info
router.get('/data/:id', function(req, res, next) {
  var url = meetupBaseURL + 'key='+meetupkey+'&event_id='+req.params.id+'&sign=true';
  request(url, function(error, data) {
    if (error) {
      res.send("Something went wrong!");
    }
    res.send(JSON.parse(data.body).results[0]);
  });
});


// get zip code based on lat/long
router.post('/zip', function(req, res, next) {
  var url = googleBaseURL + 'latlng='+req.body.lat+','+req.body.lon;
  request(url, function(error, data) {
    if (error) {
      res.send("Something went wrong!");
    }
    res.send(JSON.parse(data.body).results[0].address_components[7].short_name);
  });
});


// scraping code
router.post('/data', function(req, res, next){
  var meetupInfo = req.body;
  initWD(meetupInfo);
  var quantity = Math.ceil((((parseInt(meetupInfo.attending)*meetupInfo.expected_ratio)*2)/8)).toString();
});


module.exports = router;
