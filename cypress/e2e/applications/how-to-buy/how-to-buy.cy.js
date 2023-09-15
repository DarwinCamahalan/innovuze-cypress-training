import applicationsObject from "../../../pages/applicationsObject";

const app = new applicationsObject

describe('How to Buy', () => {
    beforeEach(() => {
        cy.visitPage("/how-to-buy")
        cy.acceptCookies("#onetrust-accept-btn-handler")
    });

    it('Verify Page Title Header should be visible', () => {
        app.verifyTitleHeader("h1", "How to Buy")
    });

    it.only('Verify Stock check button is working', () => {

        app.stockCheckButtonWorking(".conditional > a", 
        "#js-product-series-search-section", 
        "h2", ".close-modal")

    });

    it('Verify Modal Functionality is Working', () => {
        app.clickButton(".absolute:eq(4)")

        app.inputData(".js-product-series-inventory-search", "A Series")
        app.verifyAttributeDataExist('[data-series-name="A Series"]', 
        "A Series")
        
        // Assert if the list revert back to default order
        app.clearData(".js-product-series-inventory-search")
        app.checkListLength(".pagination-list > tr", 0)

        // Assert if no data found
        app.inputData(".js-product-series-inventory-search", "1111")
        app.verifyAttributeDataExist("#js-series-inventory-no-results", 
        "No product series found matching your search.")

        // Assert if the list revert back to default order
        app.clearData(".js-product-series-inventory-search")
        app.checkListLength(".pagination-list > tr", 0)
    
        app.clickButton(".sortable")
        
        // Assert List should start with letter X
        app.verifyAttributeDataExist(".pagination-list > tr:eq(0)", "X")

        app.clickButton(".sortable")
        
        // Assert List should start with letter A
        app.verifyAttributeDataExist(".pagination-list > tr:eq(1)", "A")

        app.stockButtonLoop(".js-series-inventory-link", "stock-btn"
        , "#js-back-to-search-button", ".stack > h2", "Stock Check")

    });


    it('Verify filter functionality is working', () => {

        // Assert 7Solution is on the lists
        app.inputData(".pe-8", "7solutions")   
        app.verifyAttributeDataExist("h3", "7Solutions")
        
        // // Remove the search filter
        app.clickButton(".bg-main-600:eq(0)")

        // // Assert Advanced Energy is on the lists
        app.inputData(".pe-8", "Advanced Energy")  
        app.verifyAttributeDataExist("h3", "Advanced Energy")
        app.clearData(".pe-8") 

        // // Assert List has change order from Z-A
        app.selectOptionNoAssert(".pagination-sort", 1)  
        app.verifyAttributeDataExist("h3", "YE International")

        // // Assert List has change order from A-Z
        app.selectOptionNoAssert(".pagination-sort", 0)  
        app.verifyAttributeDataExist("h3", "7Solutions")

        // // Assert if checkbox is checked or unchecked
        app.testCheckBox(".form-checkbox", "checkbox")

        // Assert Link is available & click website button
        app.websiteButtonLoop(".button", "Website", "target")
        
        // // Opens and close the contact modal
        app.contactButtonLoop(".button", "Contact", ".close-modal")

        // // yields the value of the "href" attribute
        app.emailButtonLoop(".pagination-list", ".pagination-item", 
        "div > div:last-child > a", "E-mail")

        // // Paginate to next list
        app.selectOptionLoop(".paging-select > option", ".paging-select")

        // Click next and previous button
        app.clickButton(".pagination-prev")
        app.clickButton(".pagination-next")

        // paginate to default list
        app.selectOptionNoAssert(".paging-select", 0)
    });

})
