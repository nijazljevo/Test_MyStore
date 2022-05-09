
/// <reference types="cypress"/>

context('MyStore',()=>{
    it('login',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('korisnik123@gmail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        
    })
})