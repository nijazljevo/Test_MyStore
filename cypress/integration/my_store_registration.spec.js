/// <reference types="cypress"/>

context('MyStore',()=>{
    it('my account',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email_create').type('korisnik123@gmail.com')
        cy.get('#SubmitCreate').click()
        cy.get('#uniform-id_gender1').click()
        cy.get('#customer_firstname').type('Ime')
        cy.get('#customer_lastname').type('Prezime')
        cy.get('#passwd').type('12345')
        cy.get('#company').type('company123')
        cy.get('#address1').type('Mostar88000')
        cy.get('#city').type('Mostar')
        cy.get('#id_state').select('2')
        cy.get('#postcode').type('88000')
        cy.get('#phone_mobile').type('062112456')
        cy.get('#alias').type('88202 Buna')
        cy.get('#submitAccount > span').click()
    })
})