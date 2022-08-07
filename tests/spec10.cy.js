///<reference types="Cypress"/>

describe('', () => {
  it('shows the loading element with Promise.delay', () => {
    /* We can delay the stubbed network response using the cy.intercept option.
         We can also return a promise from the request handler callback,
          delaying the mock object by a few seconds. */

    // set up an intercept to spy on the GET /fruit endpoint

    // but delay the request by 2 seconds using
    // Cypress.Promise.delay(200) and the response function
    // the response callback function

    cy.intercept('GET', '/fruit', (req) => {
      return Cypress.Promise.delay(4000).then(() => {
        req.continue()
      })
    }).as('fruit')

    // visit the site
    cy.visit('/')

    // make sure the loading element is visible
    cy.contains('#fruit', 'loading...').should('be.visible')

    // from the request spy, get the response body
    //request spy is nothing but @fruit

    cy.wait('@fruit')
      .its('response.body.fruit')
      // .then(cy.log)
      .then((fruit) => {
        // and confirm the fruit returned by the server is visible
        cy.contains('#fruit', fruit).should('be.visible')
      })
  })
})
