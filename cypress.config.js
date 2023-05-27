const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
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
      return config;
    },
  },
});
