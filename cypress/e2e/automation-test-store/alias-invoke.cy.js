/// <reference types="cypress" />

describe("Alias and invoke", () => {

    it("Validate a specific hair care product", () => {

        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname')
        .eq(0)
        .invoke('text')
        .as('productThumbnail');
        cy.get('@productThumbnail')
        .its('length')
        // be.gr = Mas grande que 
        .should('be.gt', 5);

    });
})