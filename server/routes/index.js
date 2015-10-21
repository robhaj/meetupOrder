var express = require('express');
var router = express.Router();
var path = require('path');
var webdriver = require('selenium-webdriver');
  By = require('selenium-webdriver').By;

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/data', function(req, res, next){
  var meetupInfo = req.body;
  var address = meetupInfo.address_street;
  var city = meetupInfo.address_city;
  var zip = "80202";
  var quantity = Math.ceil((((parseInt(meetupInfo.attending)/2)*2)/8)).toString();
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
  driver.sleep(3000);

  //selects cheese
  var x = driver.findElements(By.className('ui-button'));
  x.then(function(cheese){
    cheese[2].click();
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
          add[30].click();
          driver.sleep(3000);

          //checkout
          driver.findElement(By.id('lnkCheckout')).click();
        });
      });
    });
  });
});

module.exports = router;
