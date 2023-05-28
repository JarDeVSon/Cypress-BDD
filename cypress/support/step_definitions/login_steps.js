import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const login_page = require("../pages/login_page");
import { faker } from '@faker-js/faker';


const randomEmail = faker.internet.email(); 
const randomPassword = faker.internet.password(); 

Given("the user is on the login screen", () => {
  login_page.accessLogin();
});

Given("fill the credentials", (datatable) => {
  datatable.hashes().forEach((element) => {
    login_page.fillCredentials(element.email, element.password);
  });
});
Given("fill the credentials rowsHash", (datatable) => {
  let data = datatable.rowsHash();
  login_page.fillCredentials(data.email, data.password);
});

Given("fill my credentials", () => {
  login_page.fillCredentials(randomEmail, randomPassword);
});
Given("dont fill credentials", () => {
  login_page.fillCredentials("Testecypress1234@bol.com.br", "1212");
});
When("clicks on Login", () => {
  login_page.clicksLogin();
});
Then("the success message {string} should be displayed", (message) => {
  login_page.getSuccessMessage(message);
});
Then("the success message should be displayed hashes forEach", (datatable) => {
  datatable.hashes().forEach((element) => {
  login_page.getSuccessMessage(element.message);
  });
});

Then("the success message should be displayed rowsHash", (datatable) => {
  const data = datatable.rowsHash();
  login_page.getSuccessMessage(data.message);
});
Then("the alert message {string} should be displayed", (message) => {
  login_page.getMessage(message);
});

