/// <reference  types="cypress"/>



context('MyStore',()=>{
    it('order',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('korisnik123@gmail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .lnk_view > span').click()
        cy.get('#group_1').select('2').should('have.value','2')
        cy.get('.exclusive > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.button-exclusive').click()
        cy.get(':nth-child(2) > .btn > span').click()
    })
})
