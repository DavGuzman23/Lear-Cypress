/// <reference types="cypress" />

describe("Test contact us form via Automation Test Store", () => {

    it("Should be able to submit a succesful submission via contact us form", () => {

        cy.visit('https://www.automationteststore.com/');
        cy.get('ul[class="info_links_footer"] > :nth-child(5)').click();
        //cy.xpath('//a[contains(@href, "contact")]').click();
        cy.get('#ContactUsFrm_first_name').type('David');
        cy.get('#ContactUsFrm_email').type('David@daVID.com');
        cy.get('#ContactUsFrm_enquiry').type('dsafgsdagasdfhsdfh');
        cy.get('button[title = "Submit"]').click();

    });

})
