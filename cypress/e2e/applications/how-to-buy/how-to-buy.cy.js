describe('How to Buy', () => {

    beforeEach(() => {
        cy.visit("/how-to-buy")
    });
    it('Verify Page Title Header should be visible', () => {
        cy
        .get('h1')
        .should('have.text', 'How to Buy')
    });

    it('Verify Stock Check Button functionality is working', () => {
        cy.get(".absolute ").eq(4).click()
        cy.get(".close-modal").click()
    });

    it('Verify Modal Functionality is Working', () => {
        cy.get(".absolute ").eq(4).click()
        cy.get(".modal").eq(1).within(()=>{
            cy
            .get('h2')
            .should('have.text', 'Stock Check')

            cy.get(".js-product-series-inventory-search").type("aa series")
            cy.get(".js-product-series-inventory-search").clear()

            cy.get(".sortable").dblclick()

            cy.get(".pagination-list")
            .eq(0)
            .get(".js-series-inventory-link").each(($button)=>{
                cy.wrap($button).click()
                cy.get('#js-series-inventory-section', { timeout: 100_000 })
                .should('be.visible').get("#js-back-to-search-button").click()     
            })
        })
    
    });


it('Verify filter functionality is working', () => {
    cy.get(".pe-8").type("7solutions")
    cy.get(".pe-8").clear()
    cy.get(".pagination-sort").select(1)
    cy.get(".pagination-sort").select(0)

    cy.get(".how-to-buy-filters").within(() =>{
        cy.get(".simple-scrollbar").each((el, index) =>{
            cy.get(".simple-scrollbar").eq(index).within(() =>{
                cy.get("div > label > input").each((el) =>{
                    cy.wrap(el).check()
                    cy.wrap(el).uncheck() 
                    // ASSERT IF CHECKBOX IS CHECKED/UNCHECKED
                })
            })
        })
    })

    cy.get(".paging-select").each((el, index)=>{
        cy.get(".paging-select")
        // REMOVE FOR LOOP
        // SELECT PREVIOUS BUTTONS
        // ASSERT SHOWING VALUE

        for(let i = 0; i < 15; i++){
            cy.wrap(el).select(i)
            if(i === 14){
                cy.wrap(el).select(0)
            }
        }
    })
    
    cy.get(".pagination-list").within(()=>{

        cy.get(".pagination-item").each((el)=>{
            cy.wrap(el).get("div > div:last-child > a").contains("E-mail").should("exist")
            // CHECK MAILTO ATTRIBUTE
        })
    })


    cy.get(".button").contains("Contact").each((el, index)=>{
        cy.get(el).eq(index)
        .click()
        cy.get(".close-modal").click()
    })


    cy.get(".button").contains("Website").each((el, index)=>{
        cy.get(el).eq(index)
        .invoke("removeAttr", "target")
        .click()
        cy.go("back")
    })


});

})
