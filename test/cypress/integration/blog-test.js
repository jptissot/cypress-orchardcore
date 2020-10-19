/// <reference types="Cypress" />

import {generateTenantInfo} from '../../../src/utils';

describe("Blog Theme Test", function() {
  let tenant;

  before(() => {
    tenant = generateTenantInfo("Blog");
    cy.newTenant(tenant);
  })
  it("Recipe is successfull", function() {
    cy.login(tenant);
  })
});
