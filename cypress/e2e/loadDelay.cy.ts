describe('LOAD DELAY', () => {

    it('load delay emulate', () => {
        cy.visit('/', {timeout: 2_000})
        cy.get('[href="/loaddelay"]').click()
        cy.url().should('eq', 'https://uitestingplayground.com/loaddelay')
        cy.contains('button', 'Button Appearing After Delay')
    });
});
