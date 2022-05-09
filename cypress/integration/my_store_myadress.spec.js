/// <reference types="cypress"/>

context('MyStore',()=>{
    it('my adress',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('korisnik123@gmail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.myaccount-link-list > :nth-child(3) > a > span').click()
        cy.get('[href="http://automationpractice.com/index.php?controller=address&id_address=687311"] > span').click()
        cy.get('#alias').type('88202 Buna')
        cy.get('#submitAddress > span').click()
        cy.get('.footer_links > :nth-child(1) > .btn > span').click()
        cy.get('.footer_links > :nth-child(1) > .btn > span').click()
    })
})