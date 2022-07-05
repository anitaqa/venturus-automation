

describe('Page 2 Test', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
        })
        
  })
  describe('Page 2 Test1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
      cy.get('.ant-slider').invoke('val','2').trigger('change')
      cy.get('.ant-input-number-input').should('have.text', '2')
        })
  })

  describe('Page 2 Calendar Picker Test', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
      cy.get('.ant-calendar-picker-input').click().should('be.visible');
      
        })
  })

  describe('Page 2 Calendar Picker Test1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
      cy.get('.ant-calendar-picker-input').click().should('be.visible')
                    })
  })
  describe('Page 2 Calendar Picker Test2', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
      cy.get('.ant-calendar-picker-input').click().should('be.visible')
      cy.get('.ant-calendar-input').type('today').should('be.visible')
                })
  })

  describe('Page 2 TextBox Test1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
      cy.get('.ant-input-affix-wrapper > .ant-input').type('automation')
      cy.get('.ant-form-item-children > .ant-input').type('text box automation')
              })
  })


