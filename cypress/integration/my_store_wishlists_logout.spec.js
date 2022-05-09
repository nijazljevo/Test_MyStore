/// <reference types="cypress"/>

context('MyStore',()=>{
    it('my information',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('korisnik123@gmail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.lnk_wishlist > a > span').click()
        cy.get('#name').type('good')
        cy.get('#submitWishlist > span').click()
        cy.get('.footer_links > :nth-child(1) > .btn > span').click()
        cy.get('.logout').click()
    })
})