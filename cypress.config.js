const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 400,
  viewportHeight: 300,
  defaultCommandTimeOut: 6000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(
        on,
        config,
      )
    },
    specPattern: './tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4200',
  },
})
