var webdriver = require('selenium-webdriver');
  By = require('selenium-webdriver').By,
  until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();



driver.get('https://denverpizzaco.hungerrush.com/').then(function(){
  driver.findElement(By.id('lgBtn')).click();


 });


// driver.get('http://www.grubhub.com');
// driver.getTitle().then(function() {
//   driver.findElement(By.className('topNav-signIn')).click()





// driver.quit();

