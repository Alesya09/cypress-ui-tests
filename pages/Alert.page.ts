class Alert{
    private alertTextButton:string = 'Click for JS Alert'
    private buttonSelector:string = 'button'
    private jsAlertText:string = 'I am a JS Alert'
    private resultSelector:string = '#result'
    private resultTextJSAlert:string = 'You successfully clicked an alert'
   
    private jsConfirmButton:string = 'Click for JS Confirm'
    private jsConfirmText:string = 'I am a JS Confirm'
    private resultTextJSConfirm:string = 'You clicked: Ok'

    private resultTextJSConfirmCancel:string = 'You clicked: Cancel'
    
    private jsButtonPromptText = 'Click for JS Prompt'

    jsAlert(){
    cy.contains(this.buttonSelector,this.alertTextButton).click()
    cy.on('window:alert',(textAlert) =>{
        expect(textAlert).to.equal(this.jsAlertText)
        })
    cy.on('window:confirm',() => true)
    cy.get(this.resultSelector).should('have.text', this.resultTextJSAlert)
   }

   jsConfirm(){
    cy.contains(this.buttonSelector,this.jsConfirmButton).click()
    cy.on('window:alert',(textAlert) =>{
        expect(textAlert).to.equal(this.jsConfirmText)
        })
    cy.on('window:confirm',() => true)
    cy.get(this.resultSelector).should('have.text', this.resultTextJSConfirm)
   }

   jsConfirmFalse(){
    cy.contains(this.buttonSelector,this.jsConfirmButton).click()
    cy.on('window:alert',(textAlert) =>{
        expect(textAlert).to.equal(this.jsConfirmText)
        })
    cy.on('window:confirm',() => false)
    cy.get(this.resultSelector).should('have.text', this.resultTextJSConfirmCancel)
   }

   jsPrompt(){
    cy.window().then(($win)=>{
        cy.stub($win, 'prompt').returns('This is a test text!') // I am waiting for
        cy.contains('Click for JS Prompt').click()   
    })
    cy.get(this.resultSelector).should('have.text', 'You entered: This is a test text!')
    }

}


export const AlertPage = new Alert()
