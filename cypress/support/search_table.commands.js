///<reference types="cypress"/>
import loc from './locators'
Cypress.Commands.add('SEARCH_TABLE',()=>{
cy.visit("#/page1")
cy.title().contains('Table')
cy.get(loc.SEARCH_TABLE)
})

Cypress.Commands.add('TAG_SELECT_NAME',()=>{
cy.get(loc.SEARCH_TABLE.TAG_SELECT_NAME).type('Joe Black')
 cy.get(loc.SEARCH_TABLE.COLUMN_BORROW).should('have.value', '10')
 cy.get(loc.SEARCH_TABLE.COLUMN_REPAYMENT).should('have.value','10')

})