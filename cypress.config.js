const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    specPattern: "**/*.js",
    //execute manually through commandline with npx cypress open --browser chrome OR npx cypress open --browser firefox
    //OR npx cypress run --browser chrome OR npx cypress run --browser firefox
    //we can also run with npm run test:chrome OR npm run test:firefox as configured in package.json customized scripts
    baseUrl: "https://www.imdb.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
