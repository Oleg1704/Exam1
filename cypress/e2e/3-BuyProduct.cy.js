import {faker} from '@faker-js/faker'
import  user from '../fixtures/user.json'
import LoginPass from '../support/Classes/loginPass'
import BuyProduct from '../support/Classes/BuyProduct'

before('login',()=> {
  
  LoginPass.visit();
  LoginPass.submitLoginForm(user);

 });

describe('Buy product', () => {
  it('should buy a product', () => {
    BuyProduct.buyProduct();
  
  });
});