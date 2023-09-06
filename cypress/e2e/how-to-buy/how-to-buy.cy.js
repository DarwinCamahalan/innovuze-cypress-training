describe('How to Buy', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.get(".nav-text").eq(1).click()
    });
    // it('Verify Page Title Header should be visible', () => {
    //     cy
    //     .get('h1')
    //     .should('have.text', 'How to Buy')
    // });

    // it('Verify Stock Check Button functionality is working', () => {
    //     cy.get(".absolute ").eq(4).click()
    //     cy.get(".close-modal").click()
    // });

    // it.only('Verify Modal Functionality is Working', () => {
    //     cy.get(".absolute ").eq(4).click()
    //     cy.get(".modal").eq(1).within(()=>{
    //         cy
    //         .get('h2')
    //         .should('have.text', 'Stock Check')

    //         cy.get(".js-product-series-inventory-search").type("aa series")
    //         cy.get(".js-product-series-inventory-search").clear()

    //         cy.get(".sortable").dblclick()

    //         cy.get(".pagination-list")
    //         .eq(0)
    //         .get(".js-series-inventory-link").each(($button)=>{
    //             cy.wrap($button).click()
    //             cy.get('#js-series-inventory-section', { timeout: 100_000 })
    //             .should('be.visible')
    //             .then(() =>{
    //                 cy.get(".stack").eq(1)
    //                 .within(()=>{
    //                    cy.get("tbody > tr > td").get("a").each(($link) =>{
    //                     cy.wrap($link).click()
    //                    })
    //                 })
    //             })
    //             .get("#js-back-to-search-button").click()
                
    //         })
    //     })
    
    // });


it.only('Verify filter functionality is working', () => {
    // cy.get(".pe-8").type("7solutions")
    // cy.get(".pe-8").clear()
    // cy.get(".pagination-sort").select(1)
    // cy.get(".pagination-sort").select(0)

    // cy.get(".how-to-buy-filters").within(() =>{
    //     cy.get(".simple-scrollbar").each((el, index) =>{
    //         cy.get(".simple-scrollbar").eq(index).within(() =>{
    //             cy.get("div > label").each((el) =>{
    //                 cy.wrap(el).dblclick()
    //             })
    //         })

    //     })
    // })

    // cy.get(".paging-select").each((el, index)=>{
    //     for(let i = 0; i < 15; i++){
    //         cy.wrap(el).select(i)
    //         if(i === 14){
    //             cy.wrap(el).select(0)
    //         }
    //     }
       
    // })

    cy.get(".pagination-list").within(() =>{
        cy.get(".filter-item").each((el, index) =>{
            cy.get("a").eq(index).invoke('attr', 'href').should("exist")
        })
    })

});

})
