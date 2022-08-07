///<reference types="Cypress"/>

describe("", () => {
  it("does not call API until 60 seconds passed", () => {
    //application makes 1 call at the start and does not make another call until 60 sec have passed
    // spy on the GET /fruit call and pass a cy.spy function
    // as the request handler. The callback function does nothing
    // but we can use it later (via an alias) to check how
    // many times it was called = how many times the network
    // call happened
    // see https://on.cypress.io/spy -
    //spy is nothing much a function with an internal calculator that keep tracks of how many times a call was made
    // see https://on.cypress.io/stubs-spies-and-clocks

    /* cy.intercept('GET', '/fruit', (req) => {
            console.log("request made");

        }) */

    cy.intercept("GET", "/fruit", cy.spy().as("fruitCall")); //spy callback is passed to cy.intercept and it tracks how many times calls are made

    // freeze the clock
    cy.clock();
    // visit the page
    cy.visit("/");
    // get the spy via its alias and confirm it was called once
    // then reset the history of calls
    cy.get("@fruitCall").should("have.been.calledOnce").invoke("resetHistory");
    //cy.get('@fruitCall').should('have.been.calledOnce')
    // tick 59 seconds
    cy.tick(59_000);
    // confirm the spy was not executed = there were no network calls
    cy.get("@fruitCall").should("not.have.been.calledOnce");
    // tick 1 second
    cy.tick(1000);
    // confirm the spy was executed = there was a network call
    cy.get("@fruitCall").should("have.been.calledOnce");
  });
});
