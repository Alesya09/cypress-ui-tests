import { LoginPages } from "../../pages/Login.page"
Cypress.session.clearAllSavedSessions()

describe('Cookies', () => {
    beforeEach(()=>{
        cy.session('myCurrentSession',()=>{
           cy.visit(`${Cypress.env('demoQA')}/login`) 
             LoginPages.submitBurronLogin()
        })   
    })
    // no cookies created
    it('creates cookies with cy.session', () => { 
        cy.visit(`${Cypress.env('demoQA')}/login`)   
        cy.url().then((url)=>{
            cy.log(url)
        }) 
    // no cookies created
    it('creates cookies with cy.session', () => { 
        cy.visit(`${Cypress.env('demoQA')}/login`)   
        cy.contains('Log out')
            }) 
    })
})
