//
//"use strict";
//
var webdriver = require('selenium-webdriver');
  By = require('selenium-webdriver').By;
//   until = require('selenium-webdriver').until;
//
var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();
//
driver.get('https://denverpizzaco.hungerrush.com/account/logon');
driver.findElement(By.id('UserName')).sendKeys('hajek.rob@gmail.com');
driver.findElement(By.id('Password')).click();
driver.findElement(By.id('Password')).sendKeys('franks4s');
driver.findElement(By.className('ui-button')).click().then(function(){
driver.findElement(By.className('deliveryImg')).click().then(function(){
  return driver.wait(function(){
    driver.findElement(By.id('ui-accordion-addressAccord-header-1')).click();
  }, 5000).then(function(){
    driver.findElement(By.id('City')).click();
  });
  });
  driver.findElement(By.id('City')).sendKeys('Test123');


});
