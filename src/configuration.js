Cypress.Commands.add("setPageSize", ({ prefix = '' }, size) => {
  cy.visit(`${prefix}/Admin/Settings/general`);
  cy.get('#ISite_PageSize')
    .clear()
    .type(size);
  cy.get('#ISite_PageSize').parents('form').submit();
  // wait until the success message is displayed
  cy.get('.message-success');
});
