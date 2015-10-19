var WebDriver = require('selenium-node-webdriver');

WebDriver().
    then(function (driver) {
        driver.get('https://denverpizzaco.hungerrush.com/account/logon').
            then(function () {
                return driver.
                    findElement(driver.webdriver.By.id('UserName')).
                    sendKeys('hajek.rob@gmailcom');
            }).
            then(function () {
                return driver.
                    findElement(driver.webdriver.By.id('Password')).click();
            }).
            then(function () {
                return driver.
                  findElement(driver.webdriver.By.id('Password')).
                  sendKeys('franks4s');
            });
            driver.quit();
    });
