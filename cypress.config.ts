import { defineConfig } from "cypress";
require('dotenv').config()

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage:"https://stage.pasv.us/course",
      prod:"https://coding.pasv.us/course",
      test: "https://uitestingplayground.com",
      demoQA:'https://demoqa.com',
      herokuapp: 'https://the-internet.herokuapp.com',
    },
    viewportHeight:1400,
    viewportWidth:1200,
  },
  retries:{
    runMode: 2,
    openMode: 2,
  },
  defaultCommandTimeout:16000
});
