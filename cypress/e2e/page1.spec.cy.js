describe('Table Test', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page1')
        })
  })

  describe('Table Test1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page1')
      cy.contains('Table') 
        })
  })

  describe('Table Test2', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page1')
      cy.get('.ant-table-column-sorters').click()
      cy.get('table').contains('td', 'Willard Medina');
        })
  })


 
  describe('Table Test4', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page1')
      cy.get('.ant-table-column-sorters').click()
      cy.get('table').contains('td', 'Willard Medina');
      cy.get('table').contains('td', '728');
      cy.get('table').contains('td', '451');
        })
  })

  describe('Table Columns Test', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page1')
      cy.get('.ant-table-thead > tr').find('th').should('have.length', 3)
      //cy.get('thead ant-table-thead').should('have.length', '3')
        })
  })

const fullName = {
  name: "John Brown",
  borrow: 10,
  repayment: 33
}

it.only('Validation of names', () => {
cy.visit('http://localhost:3000/#/page1')
// cy.wrap(fullName).its('name').should('be.eq', 'John')
// cy.wrap(fullName).its('borrow').should('be.eq', 10)
// cy.wrap(fullName).its('repayment').should('be.eq', 30)
cy.get('table').last().contains('td',fullName.name)
cy.get('table').last().contains('td',fullName.borrow)
cy.get('table').last().contains('td',fullName.repayment)

})
