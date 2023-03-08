import LoginPass from '../support/Classes/login'
import  user from '../fixtures/user.json'

describe('Зворотній звʼязок', () => {
    it('Надсилання повідомлення', () => {
      cy.visit('/')
      LoginPass.visit();
      LoginPass.submitLoginForm(user);

      cy.get('[aria-label="Open Sidenav"]').click()
      cy.get('[routerlink="/contact"] > .mat-list-item-content').click()
      
      cy.get('#comment').type('Hello')
      cy.get('#rating').type('{rightArrow}{rightArrow}{leftArrow}')

      cy.get('#captcha').then(($el) => {;
        const expression = $el.text();
        const value = eval(expression);
        cy.get('#captchaControl').type(value);
      });

      cy.get('#submitButton').click()
  
      cy.url().should('include', '/#/')

    })
  });