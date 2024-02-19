import { LoginPages } from "../../pages/Login.page"

describe('Login Page', () => {

    beforeEach(()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)  
    })
    it('login', () => { 
        
        LoginPages.submitButtonLogin()
        
    });
});
