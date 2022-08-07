///<cypress types="Cypress" />

describe('fixture to stub using cy.fixture', () => {
  it('uses the fixture to stub and check the page', () => {
    //1. load the data from the fixture file "apple.json"
    // using the command https://on.cypress.io/fixture

    cy.fixture('apple.json').then((data) => {
      //cy.fixture() yields an object from the apple.json file which we name as data which has {fruit:Apples}
      cy.log(data)
      let fruit = data.fruit

      //2. intercept the GET call to /fruit with fixture "apple.json"
      cy.intercept('GET', '/fruit', { fruit })

      // visit the site
      cy.visit('/')

      // confirm the fruit from the fixture is shown on the page
      cy.contains('#fruit', fruit).should('be.visible')
    })
  })
})
