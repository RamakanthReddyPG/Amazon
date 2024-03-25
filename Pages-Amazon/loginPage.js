const yaml = require('js-yaml');
const fs = require('fs');
const { Before, After } = require("@cucumber/cucumber");


// Load YAML data from file
let locators;
try {
    locators = yaml.load(fs.readFileSync("C:/Nonsense/Cucumber/Amazon-MetaData/objects.yml", 'utf8'));
    console.log("Locators loaded successfully:", locators); // Check if locators are loaded correctly
} catch (error) {
    console.error("Error reading YAML file:", error);
    process.exit(1); // Exit the script if there's an error reading the YAML file
}

const { Builder, By, Key, until } = require('selenium-webdriver');
const { Browser } = require('selenium-webdriver/lib/capabilities');
let driver; // Declare the WebDriver instance globally

// Before hook to create a new WebDriver instance before each scenario
Before(async function() {
    driver = new Builder().forBrowser(Browser.FIREFOX).build();
});
const loginObject = {
    async example() {
        await driver.manage().window().maximize();
        await driver.navigate().to('https://www.google.com/ncr');
        console.log(await driver.manage().window().getSize());
        await driver.sleep(1000);
        await driver.findElement(By.name('q')).sendKeys('Amazon', Key.RETURN);
        await driver.wait(until.titleIs('Amazon - Google Search'), 1000);
        const element = await driver.wait(until.elementLocated(By.xpath("//div[@id='search']//div[@class='g']//a")), 10000);
        await element.click();
        await driver.wait(until.elementsLocated(By.xpath('//*[@id="logo-ext"]')), 1000);
    },
    async validLogin(){
        const element2 = await driver.wait(until.elementLocated(By.xpath(locators.loginBox)), 4000);
        await element2.click();
        await driver.wait(until.elementLocated(By.xpath(locators.emailInputField)),4000).sendKeys("6303947470");
        await driver.wait(until.elementLocated(By.xpath(locators.continueCTA)),1000).click();
        await driver.wait(until.elementLocated(By.xpath(locators.passwordInputField)),2000).sendKeys("EBSRKaghta2$1",Key.RETURN);
        await driver.sleep(2000);    

    },
    async landOnHome(){
        await driver.wait(until.elementLocated(By.xpath(locators.successfulLogin)),2000);
    }
    ,
    async incorrectPasswordScreen(){
        await driver.wait(until.elementLocated(By.xpath(locators.unsuccessfulLogin)),2000);
    }
    ,
    async invalidLogin(){
        const element2 = await driver.wait(until.elementLocated(By.xpath(locators.loginBox)), 4000);
        await element2.click();
        await driver.wait(until.elementLocated(By.xpath(locators.emailInputField)),4000).sendKeys("6303947470");
        await driver.wait(until.elementLocated(By.xpath(locators.continueCTA)),1000).click();
        await driver.wait(until.elementLocated(By.xpath(locators.passwordInputField)),2000).sendKeys("kKJHkh^nmn",Key.RETURN);
    }
    ,
    async example2() {
        After(async function() {
            await driver.quit();
        });
        await driver.quit();
        console.log("Closing the website.....");
    }
};

module.exports = loginObject;


  // await driver.get('https://www.google.com/ncr');
  // await driver.navigate().back();
  // await driver.navigate().forward();
  // await driver.navigate().refresh();
  // await driver.manage().window().maximize();
