Cypress.Commands.add('visitGeneralSettings', function() {
  cy.visit(`${prefix}/Admin/Settings/general`);
});

Cypress.Commands.add("visitContent", ({ prefix }, contentItemId) => {
  cy.visit(`${prefix}/Contents/ContentItems/${contentItemId}`);
});

Cypress.Commands.add('visitAdmin', ({ prefix }) => {
  cy.visit(`${prefix}/Admin`);
});

Cypress.Commands.add('visitTenantPage', ({ prefix }, url='') => {
  cy.visit(`${prefix}/${url}`);
});


