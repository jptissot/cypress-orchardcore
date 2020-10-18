# Cypress OrchardCore

A collection of cypress commands for interacting with [OrchardCore CMS](https://github.com/OrchardCMS/OrchardCore).

## Installation


## Setup

This library assumes that you will be testing OrchardCore by levraging the [Tenants](https://docs.orchardcore.net/en/dev/docs/glossary/#tenant) feature. You **must** create a test that runs first and sets up the Default tenant using the [Software as a service ](https://docs.orchardcore.net/en/dev/docs/getting-started/starter-recipes/#saas-recipe-with-thetheme) setup recipe. We are aware this breaks the ability 

To do so we suggest you create a test named `integration\000-setup-saas-site.js` with the following contents.

``` javascript
/// <reference types="Cypress" />

const sassTenant = {
  name: "Testing SaaS",
  setupRecipe: "SaaS",
}

describe("Default tenant setup using SaaS recipe", function() {
  it("Setup default tenant", function() {
    cy.visit("/");
    cy.setupSite(sassTenant);
    cy.login(sassTenant)
    // this is required to increase paging in the Tenants list page. Since we will be creating a lot of tenants during out testing.
    cy.setPageSize(sassTenant,"100");
  });
});
 
 ```


INSERT IMAGE OF FOLDER STRUCTURE HERE


## Commands

