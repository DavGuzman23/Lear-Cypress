/// <reference types="cypress" />

describe("Test contact us form via Automation Test Store", () => {

    it("Should be able to submit a succesful submission via contact us form", () => {

        cy.visit('https://www.automationteststore.com/');
        cy.get('.pull-left')
        .contains('Contact Us')
        .click()
        .then((linkText) => {
            cy.log('Clicked on link used text: ' + linkText.text())
        });
        //cy.xpath('//a[contains(@href, "contact")]').click();
        cy.get('#ContactUsFrm_first_name').type('David');
        cy.get('#ContactUsFrm_email').type('David@daVID.com')
            .should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('dsafgsdagasdfhsdfh');
        cy.get('button[title = "Submit"]').click();

        //assertion
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        //Escribe logs en la ejecucion.
        cy.log('Test has complited');

    });

})
