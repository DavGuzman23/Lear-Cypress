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
        cy.get('@productThumbnail')
        .should('include', 'Seaweed Conditioner')
    });

    it("Validate product thumbnail", () => {

        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail')
        .as('productlist');
        cy.get('@productlist')
        .should('have.length', 16);
        cy.get('@productlist')
        .find('.productcart')
        .invoke('attr', 'title')
        .should('include', 'Add to Cart');
    });

    it.only("Calculate total of normal and sale products", () => {

        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail')
        .as('productlist');
        cy.get('@productlist')
        .find('.oneprice')
        .each(($el, index, $list) => {
            cy.log($el.text())
        })
    });

})