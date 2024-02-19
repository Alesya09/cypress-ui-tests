class IFrame{
    private iframe: string = '#frame1'
    private body: string = 'body'
    private iframeChild: string = 'iframe'



    getIframe(){
        cy.get(this.iframe).then(iFrame=>{
            const body = iFrame.contents().find(this.body)
            cy.wrap(body).should('have.text', 'Parent frame')
            cy.wrap(body)
            .find(this.iframeChild)
            .then(iFrameChild=>{
             const iframeChilds = iFrameChild.contents().find(this.body)
             cy.wrap(iframeChilds).should('have.text', 'Child Iframe')
            })
        })
    }
    getIframeDup(){
        cy.get(this.iframe).then(el=>{
            const body = el.contents().find(this.body)
            cy.wrap(body).should('have.text', 'Parent frame')
            cy.wrap(body)
            .find(this.iframeChild)
            .then(el2=>{
             const iframeChilds = el2.contents().find(this.body)
             cy.wrap(iframeChilds).should('have.text', 'Child Iframe')
            })
        })
    }
}
export const IFramePage = new IFrame()

