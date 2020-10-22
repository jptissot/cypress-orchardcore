/// <reference types="Cypress" />

import {generateTenantInfo} from '../../../utils';

describe("Tenant creation Test", function() {
  it("Blog Setup recipe is successfull without description", function() {
    const tenant = generateTenantInfo("Blog");
    cy.newTenant(tenant);
    cy.login(tenant);
    cy.visitTenantList();
    cy.get(`a:contains("${tenant.name}")`).parents('li').should('contain.text', 'Recipe: Blog.')
  })
  it("Blog Setup recipe is successfull with description", function() {
    const tenant = generateTenantInfo("Blog", "This is a tenant description");
    cy.newTenant(tenant);
    cy.login(tenant);
    cy.visitTenantList();
    cy.get(`a:contains("${tenant.name}")`).parents('li.list-group-item').should('contain.text', 'Recipe: Blog. This is a tenant description')
  })
});
