const { Given, When, Then } = require("@cucumber/cucumber");
const loginPage = require("../Pages-Amazon/loginPage"); // Adjust the path as needed


// Now you can use loginObject in this module



         Given('I land on the website',{ timeout: 45000 }, async function () {
           // Write code here that turns the phrase above into concrete actions
           await loginPage.example();
         });


         Then('I login with the valid credentials', async function () {
           // Write code here that turns the phrase above into concrete actions
           await loginPage.validLogin();
         });

         Then('I login with the invalid credentials', async function () {
          // Write code here that turns the phrase above into concrete actions
          await loginPage.invalidLogin();
        });
  
         When('I will land on the home page', async function () {
           // Write code here that turns the phrase above into concrete actions
           await loginPage.landOnHome();
         });
         When('I observe the error screen', async function () {
          // Write code here that turns the phrase above into concrete actions
          await loginPage.incorrectPasswordScreen();
        });

   
         When('I close the website',{ timeout: 5000 }, async function () {
           // Write code here that turns the phrase above into concrete actions
           await loginPage.example2(); 
         });


