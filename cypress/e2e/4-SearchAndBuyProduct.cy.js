import  user from '../fixtures/user.json'
import LoginPass from '../support/Classes/login'
import { searchBuyProduct } from '../support/helper'

  describe('Buy product using search helper function', () => {
  
    it('should buy a product', () => {
      searchBuyProduct('Apple Juice')
    })
  })