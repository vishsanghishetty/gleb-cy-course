///<cypress types="Cypress" />
describe("network call exercise", () => {
  it("fastify network call exercise", () => {
    //setup the interception before visiting the page using cy.intercept and give an alias with `as(name)`
    cy.intercept("GET", "/fruit").as("fruit");
    //visit the page cy.visit
    cy.visit("/");
    //wait for the network call to finish, there might be a delay(use alias name you gave)
    //from the network call get the response body,
    // and the name of the fruit and confirm
    //fruit is shown on the page
    //anytime there is a cypress intercept it yields the intercept object
    //we can a property from an object by using `.its(property name)`
    //in the response object we have property body inside body we have fruit so we say `its(response.body.fruit)`
    cy.wait("@fruit")
      .its("response.body.fruit")
      .then(cy.log)
      .then((fruit) => {
        cy.contains("#fruit", fruit);
      });
  });
});
