describe('Contact Us', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.nav-text').eq(2).click()
    });
    it('Verify contact us header title is visible', () => {
        cy.contains("Contact Us").should('be.visible')
    });

    it('Verify form error indicator is working', () => {
        cy.get(".bg-white").eq(1).within(()=>{
            cy.get("#Email").type("invalid.com")
            cy.get("#Phone").type("#1234")
            cy.get(".mktoButtonWrap > button").click()
            cy.get("#optIn").check()
            // add assertion on class attribute change
        })
    });

    it('Verify form functionality is working', () => {
        cy.get(".bg-white").eq(1).within(()=>{
            cy.get("#FirstName").type("John")
            cy.get("#LastName").type("Doe")
            cy.get("#Email").type("johndoe@gmail.com")
            cy.get("#Phone").type("123-123-123")
            cy.get("#Company__c").type("Company A")
            cy.get("#Country").select(1).invoke("val").should("eq", "Afghanistan")
            cy.get("#typeofInquiry").select(1).invoke("val").should("eq", "Sales Support")
            cy.get("#Technology_Interest_New__c").select(1).invoke("val").should("eq", "AC-DC Power Supply Units")
            cy.get("#commentCapture").type("N/A")
            cy.get(".mktoButtonWrap > button").click()
            cy.get("#optIn").check()
            // BUTTON TEXT SHOULD CHANGED ASSERTION
            // Input should be equal to John
        })
    });

    // Assert modal title / Header
    it('Verify modal can be closed', () => {
        cy.get(".close-modal ").click()
    });
});