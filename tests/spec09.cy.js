///<cypress types="Cypress"/>
describe('', () => {
  it('returns different fruits', () => {
    // Intercepts are applied in reverse order of appearance, since  Mangoes is second it will be shown first, then Watermelons
    //1. stub the /fruit endpoint to return "Mangoes" on the first visit

    cy.intercept(
      {
        method: 'GET',
        url: '/fruit',
        times: 1,
      },
      { fruit: 'Watermelon' },
    )
    // stub the /fruit endpoint to return "Watermelon" on the second visit
    // https://on.cypress.io/intercept with "times: *" option

    cy.intercept(
      {
        method: 'GET',
        url: '/fruit',
        times: 1,
      },
      { fruit: 'Mangoes' },
    )
    // visit the site

    cy.visit('/')
    // confirm it shows "apple"
    cy.contains('#fruit', 'Mangoes').should('be.visible')

    // reload the site
    cy.reload()
    // confirm it shows "grapes"
    cy.contains('#fruit', 'Watermelon').should('be.visible')
  })
})
