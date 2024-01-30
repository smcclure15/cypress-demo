// e2e.js
// Demo Test

describe("demo test for the cypress site", () => {
  beforeEach(() => {
    cy.visit("https://cypress.io");
  });

  it('displays "Loved by OSS..." headline with weekly download stat', () => {
    cy.contains("Loved by OSS, trusted by Enterprise").scrollIntoView();

    cy.contains("Weekly downloads").prev().should("have.text", "5M+");
  });

  it("can traverse Company and About Cypress", () => {
    // Note: spec says user can "click" on Company dropdown,
    // but that actually goes directly to the site cypress.io/about-us
    // TODO: confirm if this is intended!
    cy.get("#dropdownCompany").trigger("mouseover"); // hover
    cy.contains("About Cypress").click();

    cy.url().should("eq", "https://www.cypress.io/about-us");
  });

  it("copies correct command to install", () => {
    cy.viewport(1024, 750); // needs to be wide enough to show element

    cy.contains(" Install ").click();
    cy.contains("npm install cypress").click();

    cy.window()
      .its("navigator.clipboard")
      .then((clip) => clip.readText())
      .should("equal", "npm install cypress --save-dev");
  });

  it("can traverse Product and Visual Reviews", () => {
    // Note: spec says user can "click" on Product dropdown,
    // but that actually goes directly to the site cypress.io/app
    // TODO: confirm if this is intended!
    cy.get("#dropdownProduct").trigger("mouseover"); // hover
    cy.contains("Visual Reviews").click();

    cy.url().should("eq", "https://www.cypress.io/cloud");
  });

  describe("bonus", () => {
    it("changes border on Test Analytics when scrolled into view", () => {
      cy.get("#dropdownProduct").trigger("mouseover");
      cy.contains("Smart Orchestration").click();

      // assert there's no border initially
      cy.get('a[href="#test_analytics"]').should(
        "have.class",
        "border-transparent",
      );

      // scroll well into the "Test Analytics" section
      cy.contains("Test Suite Analytics").scrollIntoView();

      // expect green circle around the button
      cy.get('a[href="#test_analytics"]').should(
        "have.class",
        "border-jade-200",
      );
    });
  });
});
