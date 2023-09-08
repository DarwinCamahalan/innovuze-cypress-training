import applicationsObject from "../../../pages/applicationsObject";

const app = new applicationsObject

const inputFieldsBlank = ["#FirstName", "#LastName", "#Email"
, "#Phone", "#Company__c", "#Country", "#typeofInquiry",
"#Technology_Interest_New__c", "#commentCapture" ];

const inputFields = ["#FirstName", "#LastName", "#Email"
, "#Phone", "#Company__c", "#commentCapture" ];

const userData = ["John", "Doe", "johndoe@gmail.com", "123-123", 
"Company A", "None"]

describe('Contact Us', () => {
    beforeEach(() => {
        cy.visitPage('/')
        cy.acceptCookies("#onetrust-accept-btn-handler")
        cy.get('.nav-text').eq(2).click()

    });
    it('Verify contact us header title is visible', () => {
        app.verifyTitleHeader("h2", "Contact Us")
    });

    it('Verify form error indicator is working', () => {
        cy.get(".bg-white").eq(1).within(()=>{
            app.inputData("#Email", "invalid.com")
            app.inputData("#Phone", "#1234")
            app.clickCheckBox("#optIn")
            app.clickButton(".mktoButtonWrap > button")

            //assertion on class attribute change
            for (let element of inputFieldsBlank){
                app.checkClassChanged(element, "mktoInvalid")
            }
        })
    });

    it('Verify form functionality is working', () => {
        cy.get(".bg-white").eq(1).within(()=>{
          
            inputFields.forEach((num1, index) => {
                const num2 = userData[index];
                app.inputData(num1, num2);
                });
                
            app.selectOption("#Country", 1, "Afghanistan")
            app.selectOption("#typeofInquiry", 1, "Sales Support")
            app.selectOption("#Technology_Interest_New__c", 1, "AC-DC Power Supply Units")
            app.clickCheckBox("#optIn")
            app.clickButton(".mktoButtonWrap > button")
            app.correctURL("https://www.advancedenergy.com/en-us/thank-you/")
            // assert if page redirect to thank you page
        })
    });
});