describe('Login Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
      })
})


describe('My First Test', () => {
  it('Login Test', () => {
    cy.visit('#/sign_in?last_page=/')
    cy.contains('Automation')
   })
})







