var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.grubhub.com');
driver.findElement(By.className('topNav-signIn')).click();
driver.findElement(By.className('formInput--email')).click();
driver.findElement(By.className('formInput--email')).sendKeys('meetup.eat@gmail.com');
driver.findElement(By.className('formInput--password')).click();
driver.findElement(By.className('formInput--password')).sendKeys('galvanize11');
driver.findElement(By.className('ghs-spinner')).click();
// driver.findElement(By.name('btnG')).click();
// driver.quit();
