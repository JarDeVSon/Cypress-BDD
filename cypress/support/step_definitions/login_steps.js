import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login_page from "../pages/login_page";
import { faker } from "@faker-js/faker";

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

Given("the user is on the login screen", function () {
  login_page.accessLogin();
});

Given("fill the credentials forEach", function (datatable) {
  datatable.hashes().forEach((element) => {
    login_page.fillCredentials(element.email, element.password);
  });
});
Given("fill the credentials rowsHash", function (datatable) {
  let data = datatable.rowsHash();
  login_page.fillCredentials(data.email, data.password);
});

Given("fill my credentials", function () {
  login_page.fillCredentials(randomEmail, randomPassword);
});

When("clicks on Login", function () {
  login_page.clicksLogin();
});

Then("the success login message {string} should be displayed", function (message) {
  login_page.getSuccessMessage(message);
  }
);
Then("the success message should be displayed hashes forEach", function (datatable) {
  datatable.hashes().forEach((element) => {
  login_page.getSuccessMessage(element.message);
  });
  }
);

Then("the success message should be displayed rowsHash", function (datatable) {
  const data = datatable.rowsHash();
  login_page.getSuccessMessage(data.message);
});

Then("the alert message should be displayed hashes forEach",function (datatable) {
  datatable.hashes().forEach((element) => {
      login_page.getMessageAlert(element.message);
  });
  }
);
Then("the alert message should be displayed rowsHash", function (datatable) {
  const data = datatable.rowsHash();
  login_page.getMessageAlert(data.message);
});
