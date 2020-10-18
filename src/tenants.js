import config from './config';

Cypress.Commands.add("login", function(prefix = "") {
  cy.visit(`${prefix}/login`);
  cy.get("#UserName").type(config.username);
  cy.get("#Password").type(config.password);
  cy.get("form").submit();
});

Cypress.Commands.add("gotoTenantSetup", (name) => {
  cy.visit("/Admin/Tenants");
  cy.get(`#btn-setup-${name}`).click();
});
Cypress.Commands.add("setupSite",  (name, setupRecipe) => {
    cy.get("#SiteName").type(name);
    cy.get("body").then($body => {
      const elem = $body.find("#RecipeName");
      if (elem) {
        elem.val(setupRecipe);
      }
      const db = $body.find("#DatabaseProvider");
      if (db) {
        db.val("Sqlite");
      }
    });
    cy.get("#UserName").type(config.username);
    cy.get("#Email").type(config.email);
    cy.get("#Password").type(config.password);
    cy.get("#PasswordConfirmation").type(config.password);
    cy.get("#SubmitButton").click();
  }
);
Cypress.Commands.add('newTenant', function(tenantInfo) {
  cy.login();
  cy.createTenant(tenantInfo);
  cy.gotoTenantSetup(tenantInfo);
  cy.setupSite(tenantInfo);
});

Cypress.Commands.add("createTenant", (name, prefix) => {
  // We create tenants on the SaaS tenant
  cy.visit("/Admin/Tenants");
  // CreateTenant -- todo: improve selector in OC admin
  cy.get('form > .row > .form-group > .btn-group > .btn').click()
  cy.get("#Name").type(name, {force:true});
  cy.get("#RequestUrlPrefix").type(prefix, {force:true});

  // set the table prefix
  cy.get("body").then($body => {
    const elem = $body.find("#TablePrefix");
    if (elem && elem.is(":visible")) {
      elem.val(prefix);
    }
  });
  // submit button -- todo: improve selector in OC admin
  cy.get(".btn-primary").click();
});
