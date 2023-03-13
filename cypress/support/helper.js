import LoginPass from '../support/Classes/login'
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
   
  }