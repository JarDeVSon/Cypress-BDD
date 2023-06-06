const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://automationpratice.com.br/",
    setupNodeEvents(on, config) {
      screenshotOnRunFailure = true;
      require("cypress-mochawesome-reporter/plugin")(on);

       // Isso é necessário para que o pré-processador possa gerar relatórios JSON após cada execução e muito mais,
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
        //Certifique-se de retornar o objeto de configuração, pois ele pode ter sido modificado pelo plug-in.
      return config;
    },
    reporter: "cypress-mochawesome-reporter", //for html reports
    reporterOptions: {
      reportPageTitle: "Cypress BDD Report ",
      embeddedScreenshots: true,
      screenshotOnRunFailure: true,
      quiet: true,
    },
  },
});
