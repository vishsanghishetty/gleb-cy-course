///<reference types="Cypress" />

describe('', () => {
  it('makes GET /fruit requests every minute', () => {
    // spy on the GET /fruit endpoint
    cy.intercept('GET', '/fruit').as('fruit')

    // use the cy.clock command to freeze the timers in the app
    // https://on.cypress.io/clock

    cy.clock()

    // visit the page
    cy.visit('/')

    // wait for the first request to finish and confirm the fruit

    cy.contains('#fruit', 'loading...').should('be.visible')
    cy.wait('@fruit')
      .its('response.body.fruit')
      .then((fruit) => {
        cy.contains('#fruit', fruit).should('be.visible')
      })

    // advance the clock by one minute using cy.tick command
    // https://on.cypress.io/tick
    cy.tick(60_000)

    // wait for the second request to finish and confirm the fruit
    cy.wait('@fruit')
      .its('response.body.fruit')
      .then((fruit) => {
        cy.contains('#fruit', fruit).should('be.visible')
      })
    // advance the clock by one minute one more time
    cy.tick(60_000)
    // wait for the network call and confirm the fruit
    cy.wait('@fruit')
      .its('response.body.fruit')
      .then((fruit) => {
        cy.contains('#fruit', fruit).should('be.visible')
      })
  })
})
