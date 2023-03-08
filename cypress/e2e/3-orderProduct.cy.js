import  user from '../fixtures/user.json'
import LoginPass from '../support/Classes/login'

 before('login',()=> {
  
  LoginPass.visit();
  LoginPass.submitLoginForm(user);

 });

 describe('Buy product', () => {
  const name = 'Oleg'
  const num = '123456789'
  const address = '123 Main St'
  const city = 'New York'
  const country = 'USA'
  const zipCode = '12345'
  const state = 'Washington'

  it('should buy a product', () => {
    cy.visit('/')
    
    cy.contains('Add to Basket').first().click()

    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click()
    cy.get('#checkoutButton').click()

    // Створюємо нову адресу (якщо адреса створена, то пропускаємо цей крок)
    // cy.get('div.ng-star-inserted .mat-focus-indicator').first().click()
    // cy.get('#mat-input-2').type(name)
    // cy.get('#mat-input-3').type(num)
    // cy.get('#address').type(address)
    // cy.get('#mat-input-6').type(city)
    // cy.get('#mat-input-1').type(country)
    // cy.get('#mat-input-4').type(zipCode)
    // cy.get('#mat-input-7').type(state)
    // cy.get('#submitButton').click()

    cy.get('#mat-radio-42').click()
    cy.get('.btn-next').click()

    cy.log('Select Delivery Address')
    cy.get(':nth-child(4) > .cdk-column-Selection').click()
    cy.get('.nextButton').click()

    cy.log('Select My Payment Options')
    cy.get('.mat-radio-label').click()
    cy.get('.nextButton').click()

    cy.log('Pay this order')
    cy.get('#checkoutButton').click()
   
    cy.contains('Thank you for your purchase!')
  })
});