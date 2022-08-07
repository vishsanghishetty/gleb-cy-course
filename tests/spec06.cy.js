///<cypress types="Cypress"/>

describe('', () => {
  it('shows the loading element then fruit from a fixture', () => {
    //1. intercept the GET call to /fruit with fixture "apple.json"

    cy.intercept('GET', '/fruit', {
      fixture: 'apple.json',
    }).as('fruitFromFixture')

    //2. visit the site
    cy.visit('/')

    //3. confirm the "loading..." text is shown
    cy.contains('#fruit', 'loading...').should('be.visible')

    //4. confirm the "apple" text is shown
    cy.contains('#fruit', 'Apples').should('be.visible')

    //5. confirm there is no element with the text "loading..."
    cy.contains('#fruit', 'loading...').should('not.exist')
  })
})
