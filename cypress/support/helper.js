import LoginPass from '../support/Classes/loginPass'
import  user from '../fixtures/user.json'

export function searchBuyProduct(productName) {
    
    cy.visit('/')
    LoginPass.visit();
    LoginPass.submitLoginForm(user);

    cy.get('#searchQuery')
    .type(`${productName}{enter}`);
    

    cy.contains(productName)

    cy.contains('Add to Basket').click()

    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click()
    cy.get('#checkoutButton').click()
  
    cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > span').click()
    cy.get('#mat-input-4').type('Oleg')
    cy.get('#mat-input-3').type('Ukraine')
    cy.get('#mat-input-5').type('123456789')
    cy.get('#mat-input-6').type('12345')
    cy.get('#address').type('Troeschyna')
    cy.get('#mat-input-8').type('Kyiv')
    cy.get('#mat-input-9').type('Kyiv')
    cy.get('#submitButton').click()
    cy.get('.ng-star-inserted .mat-card .mat-table .mat-row').first().click()
    cy.get('.btn-next').click()
  
    cy.log('Select Delivery Address')
    cy.get(':nth-child(4) > .cdk-column-Selection').click()
    cy.get('.nextButton').click()
  
    cy.log('Select My Payment Options')
    cy.get('#mat-expansion-panel-header-0').click()
    cy.get('#mat-input-10').type('Card name')
    cy.get('#mat-input-11').type('4242424242424242')
    cy.get('#mat-input-12').select('5')
    cy.get('#mat-input-13').select('2080')
    cy.get('#submitButton > .mat-button-wrapper').click()
    cy.get('.mat-row.cdk-row .mat-radio-button').first().click()
    cy.get('.nextButton').click()
  
    cy.log('Pay this order')
    cy.get('#checkoutButton').click()
  
    cy.contains('Thank you for your purchase!')
   
  }