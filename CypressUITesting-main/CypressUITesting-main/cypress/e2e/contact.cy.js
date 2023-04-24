/// <reference types="cypress"/>
describe('[Contact] feature for Product page', () => {
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(2) > .nav-link').click()
    })

    it('Verify popup [Contact] should be displayed when user click on navbarItems [Contact]', () => {
        cy.get('#exampleModal').should('be.visible')
    })

    it('Verify popup [Contact] shoud be closed when user click on [Close] button',() => {
        cy.get('#exampleModal').should('be.visible').contains('button', 'Close').click(cy.wait(5000))
        cy.get('#exampleModal').should('not.be.visible')
    })

    it('Verify popup [Contact] shoud be closed when user click on [X] icon',()=>{
        cy.get('#exampleModal').should('be.visible')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-header > .close > span').click(cy.wait(5000))
        cy.get('#exampleModal').should('not.be.visible')
    })

    it('Verify Alert should be displayed when user click on button [Send message]', () => {
        cy.get('#exampleModal').should('be.visible').contains('button', 'Send message')
        cy.contains('Send message').click(cy.wait(5000))
        cy.on('window:alert', (str) => {
        expect(str).to.equal(`Thanks for the message!!`)
        })
    })

    it('Verify Alert should be displayed when user do not enter information then click on [Send message]',()=>{
        cy.get('#exampleModal').should('be.visible').contains('button', 'Send message')
        cy.contains('Send message').click(cy.wait(5000))
        cy.on('window:alert', (str) => {
        expect(str).to.equal(`Thanks for the message!!`)
        })
    })

    it('Verify Alert should be displayed when user enter valid information then click on [Send message]',()=>{
        cy.get('#exampleModal').should('be.visible')
        cy.get('#recipient-email').type("phannhuy775@mail.com")
        cy.get('#recipient-name').type("Phan Thi Nhu Y")
        cy.get('#message-text').type("Great")
        cy.contains('Send message').click(cy.wait(5000))
        cy.on('window:alert', (str) => {
        expect(str).to.equal(`Thanks for the message!!`)

    })
})
})