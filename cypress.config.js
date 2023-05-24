const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function buscarArquivoDeConfig(arquivo){
  const caminhoArquivo = path.resolve('.', 'cypress', 'config', `${arquivo}.json`)
  return fs.readJson(caminhoArquivo)
}

module.exports = defineConfig({
  projectId: '13ni7q',
  "$schema": "htts://on.cypress.io/cypress.schema.json",
  "video": false,
  "viewportWidth": 1600,
  "viewportHeight": 900,
  "chromeWebSecurity": false,
  "numTestsKeptInMemory": 5,
  //Report
  "screenshotsFolder": "reports/screenshots",
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesome": {
      "reportDir": "reports/mocha",
      "quite": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      
      const arquivo = config.env.configFile ||'dev'
      return buscarArquivoDeConfig(arquivo)
      
    },
  },
});
