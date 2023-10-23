/// <reference types="Cypress" />
//const { describe } = require("mocha");

describe("Verify radio buttons via webdriveruni", () => {
    it("Check specific radio buttons", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons')
        .invoke('removeAttr', 'target')
        .click({force:true});

        cy.get('#radio-buttons')
        //Seleccionar primer radio button
        .find('[type="radio"]').first().check();

        cy.get('#radio-buttons')
        //Seleccionar radio button segun index
        .find('[type="radio"]').eq(2).check();

    });

    it("Validate the state of specific radio buttons", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons')
        .invoke('removeAttr', 'target')
        .click({force:true});

        cy.get('[value="lettuce"]').should('not.be.checked');
        cy.get('[value="cabbage"]').should('not.be.checked');
        cy.get('[value="pumpkin"]').should('be.checked');

        cy.get('[value="lettuce"]').check()
        cy.get('[value="lettuce"]').should('be.checked');
        cy.get('[value="pumpkin"]').should('not.be.checked');

        cy.get('[value="cabbage"]').should('be.disabled')
        
        //cy.get('#radio-buttons-selected-disabled')


    });
});