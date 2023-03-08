class LoginPass{

    constructor(){
        this.emailField = '#email';
        this.passwordField = '#password';
        this.submitButton = '#loginButton';
       }

    visit(){
        cy.log('open website login page')
        cy.visit('/#/login')
        cy.get('.close-dialog').click();
    }


    getEmailField(){
        return cy.get('#email')
    }
    getPassField(){
        return cy.get('#password')
    }
    getSubmitButton(){
        return cy.get('#loginButton').contains('Log in');
    }

    assertUserAutorized(){
        cy.log('verify user');
        cy.getCookie('customer').should('be.null');
        cy.log('user is unautorized')
    }
    submitLoginForm(user){
        cy.log('Trying to login...')
        
        this.getEmailField().type(user.userEmail);
        this.getPassField().type(user.password);
        this.getSubmitButton().click();
    }

}
export default new LoginPass()