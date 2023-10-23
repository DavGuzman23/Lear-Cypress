/// <reference types="Cypress" />
//const { describe } = require("mocha");

describe("Verify checkboxes via Wwbdriveruni", () => {
    it("Check and validate checkbox", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons')
        .invoke('removeAttr', 'target')
        .click({force:true});

        /*check box
        cy.get('#checkboxes > :nth-child(1) > input')
        .check();*/

        /*cy.get('#checkboxes > :nth-child(1) > input')
        .check()
        //comprobacion que esta marcado el box que queremos
        //Comprobacion que no esta marcado el box que queremos should('not.be.checked');
        .should('be.checked');*/

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        /*cy.get('@option-1')
        .check();*/
        cy.get('@option-1').check().should('be.checked')
    });

    it("Uncheck and validate checkbox", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons')
        .invoke('removeAttr', 'target')
        .click({force:true});

        cy.get('#checkboxes > :nth-child(1) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked');

    });

    it("check multiple checkboxes", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons')
        .invoke('removeAttr', 'target')
        .click({force:true});

        /*check en todos los checkbox
        cy.get('input[type="checkbox"]').check();*/
        //Checkea solo los que tienen ese atributo
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2'])
        .should('be.checked')
    });
})