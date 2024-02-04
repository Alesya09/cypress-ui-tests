describe('CLIENT SIDE DELAY', () => {

    it('load delay emulate', () => {
        cy.visit('/clientdelay')
        cy.get('#ajaxButton').should('be.visible').and('exist').click()
        cy.get('#spinner').should('be.visible').and('exist')
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.')

       
    });
});
