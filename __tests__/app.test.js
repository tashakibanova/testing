import luhnAlgoritm from '../src/js/validate';
import { cardBrands } from '../src/js/validate'; 
import cardNumber from '../src/js/card'; 

describe('cardNumber', () => {
  it('should return correct card brand for Visa', () => {
      expect(cardNumber('49927398716')).toBe('Visa');
  });

  it('should return correct card brand for MasterCard', () => {
      expect(cardNumber('5105256678132635')).toBe('MasterCard');
  });

  it('should return correct card brand for American Express', () => {
      expect(cardNumber('378282246310005')).toBe('American Express');
  });

  it('should return "Unknown" for an unknown card number', () => {
      expect(cardNumber('1234567890123456')).toBe('Unknown');
  });
});

describe('Luhnalgorithm', () => {
  it('should return true for valid credit card numbers', () => {
      expect(luhnAlgoritm('4242424242424242')).toBeTruthy();
      expect(luhnAlgoritm('5188254376518825')).toBeTruthy();
      expect(luhnAlgoritm('378282246310005')).toBeTruthy();
  });

  it('should return false for invalid credit card numbers', () => {
      expect(luhnAlgoritm('4242424242424243')).toBeFalsy();
      expect(luhnAlgoritm('5188254376518826')).toBeFalsy();
      expect(luhnAlgoritm('378282246310004')).toBeFalsy();
  });
});