import  user from '../fixtures/user.json'
import LoginPass from '../support/Classes/login'

 it('login',()=> {
  
  LoginPass.visit();
  LoginPass.submitLoginForm(user);

 });

 describe('Negative test Login', () => {

 it('should show error message for incorrect email or password', () => {
    cy.visit('/#/login')
    cy.get('.close-dialog').click();
    
    cy.get('#email').type('wrongemail@test.com')
    cy.get('#password').type('wrongpassword')
    cy.get('#loginButton').click()
    cy.contains('Invalid email or password').should('be.visible')
  })
})