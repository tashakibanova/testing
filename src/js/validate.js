export default function luhnAlgoritm(setValue) {
  let nCheck = 0, bEven = false;
  setValue = setValue.replace(/\D/g, "");

  for (let n = setValue.length - 1; n >= 0; n--) {
      var cDigit = setValue.charAt(n),
            nDigit = parseInt(cDigit, 10);

      if (bEven) {
          if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

