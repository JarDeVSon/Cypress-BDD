
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const login_page = require('../pages/login_page')

Given("fill the credentials", (datatable) => {
  datatable.hashes().forEach((element) => {
    login_page.fillCredentials(element.email,element.password);
  });
});
Given("the user is on the login screen", () => {
  login_page.accessLogin();
});

Given("fill my credentials", () => {
  login_page.fillCredentials("Testecypress1234@bol.com.br", "Senha123");
});
Given("dont fill credentials", () => {
  login_page.fillCredentials("Testecypress1234@bol.com.br", "1212");
});
When("clicks on Login", () => {
  login_page.clicksLogin();
});

Then("the success message should be displayed", () => {
  login_page.getSuccessMessage();
});
Then("the alert message {string} should be displayed", (message) => {
  login_page.getErrorMessage(message);
});
