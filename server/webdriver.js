//dependencies
var config = require('./_config.js');
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;

//define webdriver function
function initWD(meetupInfo) {
  var pepQuan = meetupInfo.quantities[0];
  var cheeseQuan = meetupInfo.quantities[1];
  var veggieQuan = meetupInfo.quantities[2];

  //instatiate webdriver
  var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  //login page
  driver.get('https://denverpizzaco.hungerrush.com/account/logon');
  driver.findElement(By.id('UserName')).sendKeys(meetupInfo.user_email);
  driver.findElement(By.id('Password')).sendKeys(meetupInfo.user_password);
  driver.findElement(By.className('ui-button')).click();
  driver.sleep(2000);

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

  //REFACTOR TO CHAIN EACH ACTION WITH PROMISES
  //selects cheese
  var firstPizza = driver.findElement(webdriver.By.xpath('//*[@id="Pizza"]/div/div/div[1]/div/button/span[2]'));
  firstPizza.then(function(cheese){
    cheese.click();
    driver.sleep(5000);

    //selects xlarge and pepperoni
    var xlarge = driver.findElements(By.className('SzPrice'));
    xlarge.then(function(xlarge){
      xlarge[4].click();
      driver.findElement(By.name('i1_mod_m33')).click();
      driver.sleep(3000);

      //send quantity
      var pepperoni = driver.findElement(By.id('i1_qty'));
      pepperoni.then(function(quantity){
        quantity.clear();
        quantity.sendKeys(pepQuan);
        driver.sleep(3000);

        //adds to cart
        var pepCart = driver.findElement(By.xpath('/html/body/div[4]/div[3]/div/button/span'));
        pepCart.then(function(add){
          add.click();
          driver.sleep(3000);

          //selects cheese
          var secondPizza = driver.findElement(webdriver.By.xpath('//*[@id="Pizza"]/div/div/div[1]/div/button/span[2]'));
          secondPizza.then(function(cheese){
            cheese.click();
            driver.sleep(5000);

            //selects xlarge
            var xlarge2 = driver.findElements(By.className('SzPrice'));
            xlarge2.then(function(xlarge){
              xlarge[4].click();
              driver.sleep(3000);

              //send quantity
              var cheesePizza = driver.findElement(By.id('i1_qty'));
              cheesePizza.then(function(quantity){
                quantity.clear();
                quantity.sendKeys(cheeseQuan);
                driver.sleep(3000);

                //adds to cart
                var cheeseCart = driver.findElement(By.xpath('/html/body/div[4]/div[3]/div/button/span'));
                cheeseCart.then(function(add){
                  add.click();
                  driver.sleep(3000);

                  //selects veggie
                  var veggie = driver.findElement(By.xpath('//*[@id="Pizza"]/div/div/div[4]/div/button/span[2]'));
                  veggie.then(function(veggie){
                    veggie.click();
                    driver.sleep(3000);

                    //selects xlarge
                    var vegX = driver.findElements(By.className('SzPrice'));
                    vegX.then(function(xlarge){
                      xlarge[4].click();
                      driver.sleep(3000);

                      //send quantity
                      var vegQuan = driver.findElement(By.id('i4_qty'));
                      vegQuan.then(function(quantity){
                        quantity.clear();
                        quantity.sendKeys(veggieQuan);
                        driver.sleep(3000);

                        //adds to cart
                        var vegCart = driver.findElement(By.xpath('/html/body/div[4]/div[3]/div/button/span'));
                        vegCart.then(function(add){
                          add.click();
                          driver.sleep(3000);

                          //checkout
                          driver.findElement(By.id('lnkCheckout')).click();
                          driver.sleep(2000);
                          driver.findElement(By.id('CreditCard')).sendKeys(config.cc);
                          driver.findElement(By.id('CardHolderName')).sendKeys(config.cardholder);
                          driver.findElement(By.id('ExpMonth')).sendKeys(config.expmonth);
                          driver.findElement(By.id('ExpYear')).sendKeys(config.expyear);
                          driver.findElement(By.id('SecurityCode')).sendKeys(config.csv);
                          // driver.quit();
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

module.exports = initWD;
