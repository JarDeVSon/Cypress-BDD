const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  reporterOptions: {
    reportPageTitle: 'Cypress BDD Report',
    embeddedScreenshots: true,
  },

  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://automationpratice.com.br/",
    setupNodeEvents(on, config) {
     
      // implement node event listeners here
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
