var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;

function initWD(meetupInfo) {
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

//login page
driver.get('https://denverpizzaco.hungerrush.com/account/logon');
driver.findElement(By.id('UserName')).sendKeys(meetupInfo.user_email);
driver.findElement(By.id('Password')).sendKeys(meetupInfo.user_password);
driver.findElement(By.className('ui-button')).click();
driver.sleep(3000);

//order type and address
driver.findElement(By.className('delivery')).click();
driver.findElement(By.id('ui-accordion-addressAccord-header-1')).click();
driver.sleep(3000);
driver.findElement(By.name('Address.Street')).sendKeys(meetupInfo.address_street);
driver.findElement(By.name('Address.City')).sendKeys(meetupInfo.address_city);
driver.findElement(By.name('Address.SelectedState')).sendKeys('CO');
driver.findElement(By.name('Address.Zip')).sendKeys(meetupInfo.zip_code);
driver.findElement(By.id('findStore')).click();
driver.sleep(5000);
driver.findElement(By.id('ui-id-4')).click();
driver.sleep(5000);

//selects cheese
var x = driver.findElement(webdriver.By.xpath('//*[@id="Pizza"]/div/div/div[1]/div/button/span[2]'));
x.then(function(cheese){
  cheese.click();
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
      driver.findElement(By.id('i1_qty')).sendKeys('1');
      driver.sleep(3000);

      //adds to cart
      var k = driver.findElement(By.xpath('/html/body/div[4]/div[3]/div/button/span'));
      k.then(function(add){
        add.click();
        driver.sleep(3000);

        //checkout
        driver.findElement(By.id('lnkCheckout')).click();
        driver.sleep(2000);
        // driver.findElement(By.id('CreditCard')).sendKeys(config.cc);
        // driver.findElement(By.id('CardHolderName')).sendKeys(config.cardholder);
        // driver.findElement(By.id('ExpMonth')).sendKeys(config.expmonth);
        // driver.findElement(By.id('ExpYear')).sendKeys(config.expyear);
        // driver.findElement(By.id('SecurityCode')).sendKeys(config.csv);
      });
    });
  });
});
}

module.exports = initWD;
