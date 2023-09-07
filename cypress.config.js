const { defineConfig } = require("cypress");


module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www-stage.advancedenergy.com/en-us/",
    viewportHeight: 1080,
    viewportWidth: 1980,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
