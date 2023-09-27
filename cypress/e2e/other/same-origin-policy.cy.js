/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it.skip("Validate visiting two different domains", () => {

        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');

    });

    it.skip("Validate visiting two different domains via user actions", () => {

        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store')
        .invoke('removeAttr', 'target')
        .click()
        /*
        .then(() => {
            expect('#automation-test-store').to.equal('https://automationteststore.com/')
        })*/
    })

    it('Origin comand', () => {
        /*cy.origin('webdriveruniversity.com', () => {
            cy.visit('/')
        })

        cy.origin('automationteststore.com', () => {
            cy.visit('/')
        })*/

        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('http://selectors.webdriveruniversity.com/');
    })
})
