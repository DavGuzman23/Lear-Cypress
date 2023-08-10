/// <reference types="cypress" />



describe("Verifying variables, cypress commands and jquery commands", () => {

    it("Navigating to specific product pages", () => {

        cy.visit('https://automationteststore.com/');

        //Este codigo funciona porque ambos click son en la misma pagina, em caso de no estar en la misma pagina 
        // al seguir el orden logico del codigo, fallara como se puede ver en el segundo test
        const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        const skincareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        makeupLink.click();
        skincareLink.click();

    });

    it("Navigating to specific product pages 2", () => {

        cy.visit('https://automationteststore.com/');

        const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup');
        makeupLink.click();

        //Following code will fail
        // const header = cy.get('.maintext').contains('Makeup');
        // cy.log(header.text());
        // header.should('contain', 'Makeup');
        //skincareLink.click();

        cy.get('.maintext')
        .contains('Makeup')
        .then(($headerText) => {
            const headerText = $headerText.text()
            cy.log('Found header text: ' + headerText);
            expect(headerText).is.eq('Makeup');
        })

    });


})