///<reference types="Cypress" />
describe("fastify cypress excercises", () => {
  it("shows some fruit", () => {
    // define baseUrl in cypress.json
    // (if not already set)

    cy.visit("/");

    // set the convenient viewport in cypress.json
    // like viewportWidth: 400 and viewportHeight: 300
    // (if not already set)
    //
    // visit the page
    // https://on.cypress.io/visit
    //
    // get the fruit element by ID
    // https://on.cypress.io/get

    cy.get("#fruit")
      .should("not.have.text", "loading")
      .invoke("text")
      .should("match", /^[A-Z][a-z]+$/);
    cy.contains("#fruit", /^[A-Z][a-z]+$/).should("not.have.text", "loading");

    // and confirm it does not have the loading text
    // and confirm it has the fruit name which is a word
    // that starts with a capital letter
    // followed by all lowercase letters
    // https://on.cypress.io/should
    //
    // alternative: use cy.contains with a regular expression
    // see https://on.cypress.io/contains
    //cy.contains("element", reg exp)
  });
});
