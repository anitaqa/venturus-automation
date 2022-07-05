///<reference types = "cypress"/>
import loc from './locators'
Cypress.Commands.add('validate_form_items', () => {
cy.visit('#/page2')
cy.title().should('contains', 'Test Automation')
cy.get(loc.VALIDATE_FORM_ITEMS)

})

Cypress.Commands.add(loc.VALIDATE_FORM_ITEMS.FIELD_INPUT).type('Joe Black'){
cy.get(loc.VALIDATE_FORM_ITEMS.FIELD_INPUT).type('Joe Black')
cy.get(loc.VALIDATE_FORM_ITEMS.TAG_SELECT_COUNTRY).select('country')
cy.get(loc.VALIDATE_FORM_ITEMS.TAG_TREE_SELECT).select()
cy.get(loc.VALIDATE_FORM_ITEMS.TAG_CASCADER).click
cy.get(loc.VALIDATE_FORM_ITENS.TAG_TREE_SELECT.TAG_DATE_PICKER).select('date')
cy.get(loc.VALIDATE_FORM_ITEMS.SLIDER_BOX).invoke("attr", "span", "div=1")



}