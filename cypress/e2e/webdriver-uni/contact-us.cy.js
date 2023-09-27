/// <reference types="Cypress" />
//const { describe } = require("mocha");

describe("Test contact us form via WebdriverUni", () => {
    it("Should be able to submit a succesful submission via contact us form", () => {

        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#contact-us').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true});
        cy.get('[name="first_name"]').type('David');
        cy.get('[name="last_name"]').type('Guzman');
        cy.get('[name="email"]').type('David@hotmail.com');
        cy.get('textarea.feedback-input').type('sadfasdfasdfasdf');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');

    });

    //it.only para ejecutar solo el test al que se lo pongas
    it("Should not be able to submit a succesful submission via contact us form ass all fields are required", () => {

        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#contact-us').click({force:true})
        cy.get('[name="first_name"]').type('David');
        cy.get('[name="last_name"]').type('Guzman');
        cy.get('textarea.feedback-input').type('sadfasdfasdfasdf');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');

    });

})

