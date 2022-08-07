/* eslint-disable mocha/no-empty-description */
///<cypress types="Cypress" />
describe('shows a different fruit after reloading the page', () => {
  //1. visit the site using https://on.cypress.io/visit
  // grab the fruit name from the page
  // (make sure it is not "loading...")
  //
  //2. reload the page using https://on.cypress.io/reload
  //3. grab the fruit name from the page again
  // confirm the fruit name is different
  //
  // tip: use nested https://on.cypress.io/then callbacks
  it('', () => {
    cy.visit('/')
    cy.get('#fruit')
      .should('not.include.text', 'loading...')
      .invoke('text')
      .then(cy.log)
      .then((fruit) => {
        cy.reload()
        cy.get('#fruit')
          .should('not.include.text', 'loading...')
          .and('not.have.text', fruit)
      })
  })
})
