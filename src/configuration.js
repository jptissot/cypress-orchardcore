Cypress.Commands.add("setPageSize", ({ prefix = '' }, size) => {
  cy.visitGeneralSettings();
  cy.get('#ISite_PageSize')
    .clear()
    .type(size);
  cy.btnSaveClick();
  // wait until the success message is displayed
  cy.get('.message-success');
});
