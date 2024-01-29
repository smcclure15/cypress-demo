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

describe('demo test for the cypress site', () => {
  beforeEach(() => {
    cy.visit('https://cypress.io')
  })


  it('shows "Loved by OSS..." headline', () => {
    // cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView()
    cy.contains('Loved by OSS').scrollIntoView()
    cy.contains('Weekly downloads').prev().should('have.text', '5M+')
  })

  it('can click on Company and about Cypress', () => {
    cy.get('#dropdownCompany').click()
    // this is part of the drop down, need to keep up
    // or use {force: true} to disable error checking?
    // cy.contains('About Cypress ').click()
  })

  it('can click on Install and then on "npm install cypress" and make sure copied text is right', () => {
    // todo
  })

  it('can click on "Product" then "visual review"', () => {
    // todo
  })

  describe('bonus', () => {
    it('can click Product then Smart Orchestration, then scroll down to Test Analytics and see that the green circle is aorund Test Analytics', () => {
      // todo
    })
  })
})
