///<reference types='cypress'/>
Cypress.Commands.add('login', (username, password) => {
   cy.visit("//*[@id=",normal_login_username,"]")

   cy.visit("//*[@id=",normal_login_password,"]")
cy.get('username').type('testuser')
cy.get('password').type('pl123')
cy.get('/html/body/div[1]/div/main/div/form/div[3]/div/div/span/button').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('selectYear', (yearName) =>{

    const currentYear = new Date().getFullYear

    datePickerPage.getYearName().then(($year) => {

        if($year.text()==yearName){
            cy.log(yearName + ' year is selected')
            return
        } else{

            if(yearName < currentYear){
                datePickerPage.getNavigateBack().click()

            } else if (yearName > currentYear)
            datePickerPage.getNavigateForward().click()
        }

        cy.selectYear(yearName)
    })
})