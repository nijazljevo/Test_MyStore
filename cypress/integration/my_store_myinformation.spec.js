/// <reference types="cypress"/>

context('MyStore',()=>{
    it('my information',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('korisnik123@gmail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').click()
        cy.get(':nth-child(2) > .btn > span').click()
    })
})