Cypress.Commands.add("setPageSize", (tenantInfo, size) => {
  cy.visitGeneralSettings(tenantInfo);
  cy.get('#ISite_PageSize')
    .clear()
    .type(size);
  cy.btnSaveClick();
  // wait until the success message is displayed
  cy.get('.message-success');
});
