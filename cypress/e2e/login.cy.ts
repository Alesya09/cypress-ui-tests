import LoginPage from "../../pages/Login.page"

describe('Login Page', () => {

    beforeEach(()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)  
    })
    it('login', () => { 
        
        LoginPage.userName
        LoginPage.password
        LoginPage.loginButton.click()
        cy.get('#submit').contains('Log out').should('be.visible')
        
    });
});
