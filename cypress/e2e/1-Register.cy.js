import  user from '../fixtures/user.json'
import UserPage from '../support/Classes/Register';


it('register',()=> {
  
  UserPage.visit();
  UserPage. clickAccountButton();
  UserPage.clickRegPage();
  UserPage.typeNewCustomerLink();
  UserPage.typeEmail();
  UserPage.typePassword();
  UserPage.typeConfirmPassword();
  UserPage.clickSecurityQuestion();
  UserPage.clickQuestion();
  UserPage.clickAnswer();
  UserPage.clickRegister();
 });
