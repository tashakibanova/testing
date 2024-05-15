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
    let brand = 'Unknown';
  
    Object.keys(cardBrands).sort((a, b) => b.length - a.length).forEach(key => {
        if (setValue.startsWith(key)) {
            brand = cardBrands[key];
        }
    });

    return brand;
}  