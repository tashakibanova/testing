export default function luhnAlgoritm(value) {
  let nCheck = 0;
  let nLength = value.length;

  for (let i = nLength - 1; i >= 0; i--) {
      let cDigit = value[i];
      let nDigit = parseInt(cDigit, 10);

      if ((nLength - i) % 2 === 1) {
          // Если позиция цифры нечетная...
          nDigit *= 2;
          if (nDigit > 9) {
              nDigit -= 9;
          }
      }

      nCheck += nDigit;
  }

  return nCheck % 10 === 0;
}


