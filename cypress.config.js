const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    watchForFileChanges : false,

    defaultCommandTimeout: 4000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://www.saucedemo.com' ,
    testIsolation: false,

  },
});




//
//const { defineConfig } = require("cypress");

//module.exports = defineConfig({
  //e2e: {

    //watchForFileChanges : false,

    //defaultCommandTimeout: 4000,



    //setupNodeEvents(on, config) {
           // implement node event listeners here
  //},
    //baseUrl: 'https://dev.events.home.cc' ,
    //testIsolation: false,
 // },
 //});
