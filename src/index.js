
import './tenants';
import './recipe';
import './cySelectors';
import './configuration';

Cypress.Commands.add("enableFeature", ({ prefix }, filterValue) => {
  cy.visit(`${prefix}/Admin/Features`);
  cy.get(`[data-filter-value*="${filterValue}"]`)
    .find('a:contains("Enable")')
    .first()
    .click();
});

Cypress.Commands.add("visitContent", ({ prefix }, contentItemId) => {
  cy.visit(`${prefix}/Contents/ContentItems/${contentItemId}`);
});

Cypress.Commands.add('visitAdmin', ({ prefix }) => {
  cy.visit(`${prefix}/Admin`);
});

Cypress.Commands.add('visitTenantPage', ({ prefix }, url) => {
  cy.visit(`${prefix}/${url}`);
});
