var express = require('express');
var router = express.Router();
var https = require('https');
var http = require('http');
var config = require('../_config.js');
var request = require("request");
var meetupkey = config.meetupkey;
var webdriver = require('selenium-webdriver');
  By = require('selenium-webdriver').By;

router.get('/data/:id', function (req, res) {
  request("https://api.meetup.com/2/events?key="+ meetupkey+'&event_id='+req.params.id+'&sign=true', function(error, data) {
    if (!error) {
      res.send(JSON.parse(data.body).results[0]);
    }
  });
});

router.post('/getZip', function (req, res) {
  console.log(req.body);
  request('http://maps.googleapis.com/maps/api/geocode/json?latlng='+req.body.lat+','+req.body.lon, function(error, data) {
    if (!error) {
      res.send(JSON.parse(data.body).results[0].address_components[7].short_name);
    }
  });
});

router.post('/data', function(req, res, next){
  var meetupInfo = req.body;
  var username = meetupInfo.user_email;
  var password = meetupInfo.user_password;
  var address = meetupInfo.address_street;
  var city = meetupInfo.address_city;
  var zip = meetupInfo.zip_code;
  var quantity = Math.ceil((((parseInt(meetupInfo.attending)*meetupInfo.expected_ratio)*2)/8)).toString();
  var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

  //login page
  driver.get('https://denverpizzaco.hungerrush.com/account/logon');
  driver.findElement(By.id('UserName')).sendKeys(username);
  driver.findElement(By.id('Password')).sendKeys(password);
  driver.findElement(By.className('ui-button')).click();
  driver.sleep(3000);

  //order type and address
  driver.findElement(By.className('delivery')).click();
  driver.findElement(By.id('ui-accordion-addressAccord-header-1')).click();
  driver.sleep(3000);
  driver.findElement(By.name('Address.Street')).sendKeys(address);
  driver.findElement(By.name('Address.City')).sendKeys(city);
  driver.findElement(By.name('Address.SelectedState')).sendKeys('CO');
  driver.findElement(By.name('Address.Zip')).sendKeys(zip);
  driver.findElement(By.id('findStore')).click();
  driver.sleep(5000);
  driver.findElement(By.id('ui-id-4')).click();
  driver.sleep(5000);

  //selects cheese
  var x = driver.findElements(webdriver.By.className('ui-button'));
  x.then(function(cheese){
    cheese[3].click();
    driver.sleep(5000);

    //selects xlarge
    var y = driver.findElements(By.className('SzPrice'));
    y.then(function(xlarge){
      xlarge[4].click();
      driver.findElement(By.name('i1_mod_m33')).click();
      driver.sleep(3000);

      //selects half pepperoni
      var z = driver.findElements(By.className('mods-h1-active'));
      z.then(function(pepperoni){
        pepperoni[39].click();
        driver.findElement(By.id('i1_qty')).clear();
        driver.findElement(By.id('i1_qty')).sendKeys(quantity);
        driver.sleep(3000);

        //adds to cart
        var k = driver.findElements(By.className('ui-button'));
        k.then(function(add){
          add[31].click();
          driver.sleep(3000);

          //checkout
          driver.findElement(By.id('lnkCheckout')).click();
          driver.sleep(2000);
          driver.findElement(By.id('CreditCard')).sendKeys('0000123456789876');
          driver.findElement(By.id('CardHolderName')).sendKeys('Michael Jeffery Herman');
          driver.findElement(By.id('ExpMonth')).sendKeys('1');
          driver.findElement(By.id('ExpYear')).sendKeys('1');
          driver.findElement(By.id('SecurityCode')).sendKeys('123');
        });
      });
    });
  });
});

module.exports = router;
