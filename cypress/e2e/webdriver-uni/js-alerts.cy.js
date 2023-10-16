/// <reference types="Cypress" />
//const { describe } = require("mocha");

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts')
        .invoke('removeAttr', 'target')
        .click({force:true});

        cy.get('#button1')
        .click();

        //logica para comprobar que el texto que muestra el alert es el esperado
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts')
        .invoke('removeAttr', 'target')
        .click({force:true});
        cy.get('#button4')
        .click();

        cy.on('window:confirm', (str) => {
            // Si retorna true, en la alerta hara click en OK
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    });

    it("Validate js confirm alert box works correctly when clicking cancel", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts')
        .invoke('removeAttr', 'target')
        .click({force:true});

        cy.get('#button4')
        .click();

        // Window:confirm hace click en el boton dependiendo de el return, si es true lo hara en ok, si es false lo hara en cancel
        cy.on('window:confirm', (str) => {
            // Si retorna false hara click en cancel
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    });

    it("Validate js confirm alert box using a stub", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts')
        .invoke('removeAttr', 'target')
        .click({force:true});

        const stub = cy.stub();
        cy.on('window:confirm', stub)

        cy.get('#button4')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        })
        .then(() => {
            return true
        })
        .then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });
})