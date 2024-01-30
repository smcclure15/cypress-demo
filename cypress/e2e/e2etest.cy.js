/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("demo test for the cypress site", () => {
  beforeEach(() => {
    cy.visit("https://cypress.io");
  });

  it('displays "Loved by OSS..." headline with weekly downloads', () => {
    cy.contains("Loved by OSS").scrollIntoView();
    cy.contains("Weekly downloads").prev().should("have.text", "5M+");
  });

  it("can click on Company and about Cypress", () => {
    // TODO: spec says user can "click" on Company dropdown, but that actually goes directly to the site cypress.io/about-us ; is this intended?
    cy.get("#dropdownCompany").trigger("mouseover"); // "hover"
    cy.contains("About Cypress").click();
    cy.url().should("eq", "https://www.cypress.io/about-us");
  });

  it('can click on Install and then on "npm install cypress" and make sure copied text is right', () => {
    cy.viewport(1024, 750); // needs to be wide enough to show element
    cy.contains(" Install ").click();
    cy.contains("npm install cypress").click();

    cy.window()
      .its("navigator.clipboard")
      .then((clip) => clip.readText())
      .should("equal", "npm install cypress --save-dev");
  });

  it('can click on "Product" then "visual review"', () => {
    // TODO: spec says user can "click" on Product dropdown, but that actually goes directly to the site cypress.io/app ; is this intended?
    cy.get("#dropdownProduct").trigger("mouseover");
    cy.contains("Visual Reviews").click();

    cy.url().should("eq", "https://www.cypress.io/cloud");
  });

  describe("bonus", () => {
    it("can click Product then Smart Orchestration, then scroll down to Test Analytics and see that the green circle is aorund Test Analytics", () => {
      cy.get("#dropdownProduct").trigger("mouseover");
      cy.contains("Smart Orchestration").click();

      // no border initially
      cy.get('a[href="#test_analytics"]').should(
        "have.class",
        "border-transparent",
      );

      // scroll well into the "Test Analytics" section
      cy.contains("Test Suite Analytics").scrollIntoView();

      // green circle around the button
      cy.get('a[href="#test_analytics"]').should(
        "have.class",
        "border-jade-200",
      );
    });
  });
});
