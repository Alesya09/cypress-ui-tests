import { AlertPage } from '../../pages/Alert.page'

describe('ALERT', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`) 
    })

    it('Click for JS Alert', () => {
        AlertPage.jsAlert()
    });

    it('Click for JS Confirm OK', () => {
        AlertPage.jsConfirm()
    });

    it('Click for JS Confirm FALSE', () => {
        AlertPage.jsConfirmFalse()
    });

    it('Click for JS Prompt OK/true', () => {
        AlertPage.jsPrompt()
    });
});
