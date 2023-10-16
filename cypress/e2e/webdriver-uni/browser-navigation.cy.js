/// <reference types="Cypress" />
//const { describe } = require("mocha");

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct page", () => {

        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#contact-us')
        //comando jQuery para borrar el atributo y asi al hacer click la pagina no se abre en una nueva ventana.
        .invoke('removeAttr', 'target')
        .click({force:true});
        cy.url().should('include', 'contactus');

        //Click en la flecha para volver a la pagina anterior
        cy.go('back');
        cy.reload();
        //cy.reload(true) //recarga la pagina sin el cache
        cy.url().should('include', 'http://www.webdriveruniversity.com/');
        
        //adelante
        cy.go('forward');
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.get('#login-portal')
        //comando jQuery para borrar el atributo y asi al hacer click la pagina no se abre en una nueva ventana.
        .invoke('removeAttr', 'target')
        .click({force:true});
        cy.url().should('include', 'Login-Portal');
        cy.go('back');

        cy.get('#to-do-list')
        //comando jQuery para borrar el atributo y asi al hacer click la pagina no se abre en una nueva ventana.
        .invoke('removeAttr', 'target')
        .click({force:true});
        cy.url().should('include', 'To-Do-List');
        cy.go('back');
    });

})