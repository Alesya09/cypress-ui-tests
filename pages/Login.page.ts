
class Login{
    userName: string = '#userName'
    password: string = '#password'
    loginButton: string = '#login'
    logOutButton: string = '#submit'

    submitButtonLogin(){
        // cy.get(this.userName).type(process.env.EMAIL)
        // cy.get(this.password).type(process.env.PASSWORD)
        cy.get(this.userName).type('test')
        cy.get(this.password).type('Test1234*')
        cy.get(this.loginButton).click()
        cy.get(this.logOutButton).contains('Log out').should('be.visible')
    }
}
export const LoginPages = new Login()
