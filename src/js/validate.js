export default function luhnAlgoritm(value) {
  let sum = 0;

  for (let i = 0; i < value.length; i++) {
    let digit = parseInt(value[value.length - 1 - i], 10);

    if (i % 2 !== 0) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  return sum % 10 === 0;
}


