export default function luhnAlgoritm(setValue) {
  
  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  setValue = setValue.replace(/\D/g, "");

  for (let n = setValue.length - 1; n >= 0; n--) {
      let cDigit = setValue.charAt(n),
            nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

