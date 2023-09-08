class applicationsObject{
    
    verifyTitleHeader(element, title){
        cy.get(element)
        .contains(title)
        .should("be.visible")
    }

    verifyAttributeDataExist(element, text){
        cy.get(element).contains(text)
    }

    inputData(element, data){
        cy.get(element).type(data)
    }

    clearData(element){
        cy.get(element).clear()
    }
    
    clickButton(element){
        cy.get(element).click()
    }

    selectOption(element, index, choice){
        cy.get(element).select(index).invoke("val").should("eq", choice)
    }

    selectOptionNoAssert(element, index){
        cy.get(element).select(index)
    }

    selectOptionLoop(optionElement, parentElement){
        cy.get(optionElement).each((el, index)=>{
            cy.get(parentElement).select(index)
        })
    }

    clickCheckBox(element){
        cy.get(element).check()
    }

    testCheckBox(element, alias){
        cy.get(element)
        .as(alias)
        .each((el, index)=>{
            cy.get(`@${alias}`).eq(index).check().should('be.checked')
            cy.get(`@${alias}`).eq(index).uncheck().should('not.be.checked');
        })
    }

    checkClassChanged(className, newClass){
        cy.get(className)
        .should('have.class', newClass);
    }

    checkListLength(element, length){
        cy.get(element).its('length').should('be.gt', length)
    }

    correctURL(url){
        cy.url().should('be.equal', url)
    }

    stockButtonLoop(element, alias, element2, assertionElement, assertionText){
        cy.get(element)
        .as(alias)
        .each((el, index) =>{
            cy.get(`@${alias}`).eq(index).click({force: true})
            cy.get(assertionElement).contains(assertionText)
            cy.get(element2).click({force: true})
        }) 
    }

    emailButtonLoop(parentElement, childElement, selector, text){
        cy.get(parentElement).within(()=>{
            cy.get(childElement).each((el)=>{
                cy.wrap(el).get(selector).contains(text)
                .should('have.attr', 'href')
                .and('match', /^mailto:/)

            })
        })
    }
    
}

module.exports = applicationsObject