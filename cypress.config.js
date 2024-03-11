const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.seleniumeasy.com/",
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    watchForFileChanges: false,
    viewportHeight: 800,
    viewportWidth: 1500,
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
    // specPattern: '**/*.*',
    
    setupNodeEvents(on, config) {
      on("task", {
        // Define your custom tasks here
      });
    }
  }
});
