
Cypress.Commands.add("runRecipe", ({ prefix }, filterValue) => {
  cy.visit(`${prefix}/Admin/Recipes`);
  cy.get(`[data-filter-value*="${filterValue}"]`)
    .find('a:contains("Run")')
    .first()
    .click();
  cy.get("#modalOkButton").click();
});

Cypress.Commands.add("uploadRecipeJson", ({ prefix }, fixturePath) => {
  cy.fixture(fixturePath).then((data) => {
    cy.visit(`${prefix}/Admin/DeploymentPlan/Import/Json`);
    cy.get('#Json').invoke('val', JSON.stringify(data)).trigger('input',{force: true});
    cy.get('.ta-content > form').submit();
    // make sure the message-success alert is displayed
    cy.get('.message-success').should('contain', "Recipe imported");
  });
});
