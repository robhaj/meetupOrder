var webdriver = require('selenium-webdriver');
By = require('selenium-webdriver').By;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();

//login page
driver.get('https://denverpizzaco.hungerrush.com/account/logon');
driver.findElement(By.id('UserName')).sendKeys('hajek.rob@gmail.com');
driver.findElement(By.id('Password')).sendKeys('franks4s');
driver.findElement(By.className('ui-button')).click();

//order type and address
driver.findElement(By.id('delivery')).click();
driver.findElement(By.id('ui-accordion-addressAccord-header-1')).click();
driver.findElement(By.name('Address.Street')).sendKeys('1062 Delaware St.');
driver.findElement(By.name('Address.City')).sendKeys('Denver');
driver.findElement(By.name('Address.SelectedState')).sendKeys('CO');
driver.findElement(By.name('Address.Zip')).sendKeys('12345');
driver.findElement(By.id('findStore')).click();

driver.sleep(1000);
driver.findElement(By.id('ui-id-4')).click();
driver.sleep(1000);

//selects cheese pizza
var x = driver.findElements(By.className('ui-button'));
x.then(function(cheese){
  cheese[2].click();
  driver.sleep(1000);

  //selects xlarge
  var y = driver.findElements(By.className('SzPrice'));
  y.then(function(xlarge){
    xlarge[4].click();
    driver.findElement(By.name('i1_mod_m33')).click();
    driver.sleep(1000);

    //selects half pepperoni
    var z = driver.findElements(By.className('mods-h1-active'));
    z.then(function(pepperoni){
      pepperoni[39].click();
      driver.findElement(By.id('i1_qty')).sendKeys('5');
      driver.sleep(1000);

      //adds to cart
      var k = driver.findElements(By.className('ui-button'));
      k.then(function(add){
        add[30].click();
        driver.sleep(1000);

        //checkout
        driver.findElement(By.id('lnkCheckout')).click();
      });
    });
  });
});
