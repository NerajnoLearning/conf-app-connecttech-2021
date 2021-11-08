/// <reference types="cypress" />

it("should render form", () => {
  cy.visit("http://localhost:3000");
  cy.findAllByText("Submit talk").click();

  
});
