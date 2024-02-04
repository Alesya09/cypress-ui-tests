class LoginPage {
 
    get userName() { return cy.get('#userName').type('test') }
    get password() { return cy.get('#password').type('Test1234*') }
    get loginButton() { return cy.get('#login')}
}

export default new LoginPage()
