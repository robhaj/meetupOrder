//
//"use strict";
//
var webdriver = require('selenium-webdriver');
  By = require('selenium-webdriver').By;
//   until = require('selenium-webdriver').until;
//
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
//
driver.get('https://denverpizzaco.hungerrush.com/account/logon');
driver.findElement(By.id('UserName')).sendKeys('hajek.rob@gmail.com');
driver.findElement(By.id('Password')).click();
driver.findElement(By.id('Password')).sendKeys('franks4s');
driver.findElement(By.className('ui-button')).click().then(function(){
  return driver.findElement(By.className('deliveryImg')).click().then(function(){
     driver.findElement(By.className('deliveryImg')).click().then(function(){
  });
});
});
