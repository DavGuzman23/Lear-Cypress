/// <reference types="Cypress" />
//const { describe } = require("mocha");

describe("Handleing iFrame and Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#iframe')
        .invoke('removeAttr', 'target')
        .click({force:true});

        cy.get('#frame')
        .then($iframe => {
            //Entramos en el body del iframe
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe')
        .find('#button-find-out-more')
        .click();

        cy.get('@iframe')
        .find('#myModal')
        .as('modal')

        cy.get('@modal').should(($expectedText) => {
            //Entramos en el modal para verficar que el texto que contiene es el esperado
            const text = $expectedText.text();
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        })

        cy.get('@modal')
        .contains('Close')
        .click();
    });

})
