class BuyProduct {
    constructor() {
      this.name = '#mat-input-2';
      this.num = '#mat-input-3';
      this.address = '#address';
      this.city = '#mat-input-6';
      this.country = '#mat-input-1';
      this.zipCode = '#mat-input-4';
      this.state = '#mat-input-7';
      this.url = 'https://juice-shop-sanitarskyi.herokuapp.com/';
      this.addToBasketBtn = () => cy.contains('Add to Basket').first().click()
      this.goToBasket = '.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted';
      this.checkoutBtn = '#checkoutButton';
      this.newAddressBtn = 'div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > span';
      this.submitBtn = '#submitButton';

      this.addressRadio = '.ng-star-inserted .mat-card .mat-table .mat-row';
      this.nextBtn = '.btn-next';
      
      this.deliveryAddress = '.mat-row.cdk-row.ng-star-inserted';
      this.button = '.nextButton > .mat-button-wrapper > span'

      this.addCard = '#mat-expansion-panel-header-0';
      this.cardName = '#mat-input-8';
      this.cardNum = '#mat-input-9';
      this.month = '#mat-input-10';
      this.year = '#mat-input-11';
      this.subBtn = '#submitButton';
      this.btnNext = '.nextButton .mat-button-wrapper > span';
      this.paymentOptionRadio = '.mat-row.cdk-row .mat-radio-button';
      this.payBtn = '#checkoutButton';
      this.thankYouMessage = () => cy.contains('Thank you for your purchase!');
    }
  
    visit() {
      cy.visit(this.url);
    }
  
    clickAddToBasket() {
      this.addToBasketBtn().first().click();
    }

    clickOnBasket() {
      cy.get(this.goToBasket).click()
    }
  
    clickCheckout() {
      cy.get(this.checkoutBtn).click();
    }
  
    clickNewAddress() {
      cy.get(this.newAddressBtn).click();
    }
  
    fillAddressForm() {
      cy.get(this.name).type('Oleg');
      cy.get(this.num).type('123456789');
      cy.get(this.address).type('123 Main St');
      cy.get(this.city).type('New York');
      cy.get(this.country).type('USA');
      cy.get(this.zipCode).type('12345');
      cy.get(this.state).type('Washington');
      cy.get(this.submitBtn).click();
    }
  
    selectAnAddress() {
      cy.get(this.addressRadio).first().click();
      cy.get(this.nextBtn).click();
    }

    selectDeliveryAddress() {
      cy.get(this.deliveryAddress).first().click();
      cy.get(this.button).click();
    }
  
    selectPaymentOption() {
      cy.get(this.addCard).click();
      cy.get(this.cardName).type('Card Name')
      cy.get(this.cardNum).type('4242424242424242');
      cy.get(this.month).select('5');
      cy.get(this.year).select('2080');
      cy.get(this.paymentOptionRadio).first().click();
      cy.get(this.subBtn).click();
      cy.get(this.btnNext).click();
    }
  
    payOrder() {
      cy.get(this.payBtn).click();
    }
  
    verifyThankYouMessage() {
      cy.get(this.thankYouMessage).should('be.visible');
    }
  
    buyProduct() {
      this.visit();
      this.clickAddToBasket();
      this.clickOnBasket();
      this.clickCheckout();
      this.clickNewAddress();
      this.fillAddressForm();
      this.selectAnAddress();
      this.selectDeliveryAddress();
      this.selectPaymentOption();
      this.payOrder();
      this.verifyThankYouMessage();
    }
  }
  export default new BuyProduct()
