describe('ENV', () => {
    it('stage', () => {
        cy.visit(Cypress.env('stage'));
    });

    it('Prod', () => {
        cy.visit(Cypress.env('prod'));
    });
});