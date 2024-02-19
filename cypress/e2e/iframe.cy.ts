import { IFramePage } from "../../pages/Iframe.page"

describe('IFRAME', () => {

    beforeEach(()=>{
        cy.visit(`${Cypress.env('demoQA')}/nestedframes`)  
    })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
      })

    it('iframe', () => {
        IFramePage.getIframe()
    });
});
