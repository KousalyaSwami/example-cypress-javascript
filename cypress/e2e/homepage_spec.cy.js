describe('NZH Homepage Test', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            appName: 'NZH Homepage',
            testName: Cypress.currentTest.title,
        })
    })
    it("A custom header is loaded", () => {
        cy.visit('https://play.nzherald.co.nz/?adtest=cypress');
        cy.eyesCheckWindow({
            tag: "Homepage page"
        });
        cy.get("[data-test-ui=section-chain__header").should("be.visible");
        cy.get("[data-test-ui=section-chain__heading]").should("be.visible");
        cy.get("[data-test-ui=section-chain__heading-link--default]").should("be.visible");
        // cy.get("[data-test-ui=section-chain__heading-link--default]").eq(1);
      });

    afterEach(() => {
        // End Applitools Visual AI Test
        cy.eyesClose()
    })
})
