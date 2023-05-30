import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastro_page from "../pages/cadastro_page";
import { faker } from "@faker-js/faker";

const randomName = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

Given("the user is on the register screen", () => {
  cadastro_page.accessRegister();
});
Given("fill my credentials to register", () => {
  cadastro_page.fillCredentials(randomName, randomEmail, randomPassword);
});
When("clicks on Register", () => {
    cadastro_page.clicksRegister();
});
Then("the success register message {string} should be displayed", (message) => {
    cadastro_page.getSuccessMessage(message);
});
