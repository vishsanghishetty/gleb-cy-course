///<cypress types="Cypress"/>
//relative path
import { fruit } from "../cypress/fixtures/apple.json";

describe("import the fixture JSON data from the file", () => {
  it("import the fixture JSON data from the file", () => {
    //1.print the imported fruit to the Command Log
    cy.log(fruit);
    //2.intercept the GET call to /fruit with fixture "apple.json"
    cy.intercept("GET", "/fruit", { fixture: "apple.json" });

    //3. visit the site
    cy.visit("/");

    //confirm the fruit from the fixture is shown on the page
    cy.contains("#fruit", fruit);
  });
});
