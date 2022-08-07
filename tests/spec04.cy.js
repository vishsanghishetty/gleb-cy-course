///<cypress types="Cypress" />
describe("shows loading element", () => {
  /* While the application is making the Ajax request, it shows the "loading..." text.
     Usually it goes by too quickly, but we can slow it down.
     We can stub the network request from the test, and reply only after several seconds. */

  it("clearly shows loading element", () => {
    /* 1. stub the network call the app makes
        and delay returning the fruit by 2 seconds
        2. visit the page
        3. check if the loading element is visible
        4. and then does not exist
        5. confirm the displayed fruit */

    //1
    const fruit = "Apples";
    cy.intercept("GET", "/fruit", {
      body: { fruit },
      delay: 2000,
    });

    //2
    cy.visit("/");

    //3
    cy.get("#fruit").should("be.visible").and("have.text", "loading...");

    //4
    cy.get("#fruit").should("not.contain", "loading");

    //5
    cy.contains("#fruit", fruit).should("be.visible");
  });
});
