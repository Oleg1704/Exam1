class UserPage {
    constructor() {
    this.accountButton = '#navbarAccount';
    this.regPage = '#navbarLoginButton';
    this.newCustomerLink = '#newCustomerLink';
    this.emailField = '#emailControl';
    this.passwordField = '#passwordControl';
    this.confirmPasswordField = '#repeatPasswordControl';
    this.securityQuestion = '.mat-form-field-infix [name="securityQuestion"]';
    this.question = '#mat-option-4';
    this.answer = '.mat-form-field-wrapper [placeholder="Answer to your security question"]';
    this.registerButton = '#registerButton';
    }
    
    visit() {
    cy.visit('/');
    cy.get('.close-dialog').click();
    }
    
    clickAccountButton() {
    cy.get(this.accountButton).click();
    }

    clickRegPage(){
    cy.get(this.regPage).click();
    }
    
    typeNewCustomerLink() {
    cy.get(this.newCustomerLink).click();
    }
    
    typeEmail() {
    cy.get(this.emailField).type('oleg@best.com');
    }
    
    typePassword() {
    cy.get(this.passwordField).type('12345');
    }
    
    typeConfirmPassword() {
    cy.get(this.confirmPasswordField).type('12345');
    }
    
    clickSecurityQuestion() {
    cy.get(this.securityQuestion).click();
    }
    
    clickQuestion() {
    cy.get(this.question).click();
    }

    clickAnswer() {
        cy.get(this.answer).type('Hello');
        }
    
    clickRegister() {
    cy.get(this.registerButton).click();
    }
    }
    export default new UserPage()