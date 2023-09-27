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
        /*
        cy.get('@productlist')
        .find('.oneprice')
        .each(($el, index, $list) => {
            cy.log($el.text())
        })*/
        cy.get('.thumbnail')
        .find('.oneprice')
        .invoke('text')
        .as('itemPrice');

        var itemsTotal = 0;
        cy.get('@itemPrice')
        .then($linktext => {
            var itemsPriceTotal = 0;
            var itemPrice = $linktext.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++){
                /*Interaccion
                [0] - test
                [1] - test
                [2] - test
                [3] - test
                [4] - test*/
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal;
            cy.log('Non sale price item total: ' + itemsPriceTotal);
        })

         //Iteraccion sobre todos los productos con descuento para conseguir su nuevo valor tras el descuento
        cy.get('.thumbnail')
        .find('.pricenew')
        .invoke('text')
        .as('saleItemPrice');

        cy.get('@saleItemPrice')
        .then($linktext => {
            var newsaleItemsPrice = 0;
            var newsaleItemPrice = $linktext.split('$');
            var i;
            for(i = 0; i < newsaleItemPrice.length; i++){
                cy.log(newsaleItemPrice[i])
                newsaleItemsPrice += Number(newsaleItemPrice[i])
            }
            itemsTotal += newsaleItemsPrice
            cy.log('New sale price item total: ' + newsaleItemsPrice);
        })
        .then(() => {
            cy.log('Sale price item total: ' + itemsTotal);
            expect(itemsTotal).to.equal(660.5)
        })
    });
})