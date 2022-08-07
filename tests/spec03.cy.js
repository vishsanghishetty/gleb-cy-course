///<cypress types="Cypress" />

/* If the server does not implement the API endpoint, 
we can still test the web application's behavior.
Instead of letting the app's request get to the server, we can stub it from the test.
Then we control the data the application receives, and can check the page to make
sure it shows the mock data correctly. */
describe('Stubbing', () => {
  it('shows the fruit returned from the test', () => {
    // stub the network call the application makes
    // to the server using "GET /fruit"
    // return "Kiwi" json object
    const fruit = 'Kiwi'
    cy.intercept('GET', '/fruit', { fruit }).as('fruit')
    //visit the page
    cy.visit('/')
    //wait for the app to make the network call
    //make sure the stub was used
    cy.wait('@fruit')
    // confirm the application shows the fruit "Kiwi"
    cy.contains('#fruit', fruit)
  })
})
