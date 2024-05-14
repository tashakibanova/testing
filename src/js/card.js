  export const cardBrands = {
    '4': 'Visa',
    '51': 'MasterCard',
    '52': 'Maestro',
    '53': 'Diners Club International',
    '54': 'InstaPayment',
    '55': 'Discover',
    '34': 'American Express',
    '37': 'American Express'
  };
  
  export default function cardNumber(setValue) {
    const firstDigits = setValue.substring(0, 2);
    return cardBrands[firstDigits] || 'Unknown';
  }  