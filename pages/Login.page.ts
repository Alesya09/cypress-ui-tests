class LoginPage {
 
    get userName() { return cy.get('#userName').type('test') }
    get password() { return cy.get('#password').type('Test1234*') }
    get loginButton() { return cy.get('#login')}
}

export default new LoginPage()

// # 2

class Login{
    userName: string = '#userName'
    password: string = '#password'
    loginButton: string = '#login'
    logOutButton: string = '#submit'

    submitBurronLogin(){
        cy.get(this.userName).type('test')
        cy.get(this.password).type('Test1234*')
        cy.get(this.loginButton).click()
        cy.get(this.logOutButton).contains('Log out').should('be.visible')
    }
}
export const LoginPages = new Login()
