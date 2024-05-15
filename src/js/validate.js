export default function luhnAlgoritm(value) {
  let nCheck = 0;
  let nLength = value.length;
  let isSecond = false;

  for (let i = nLength - 1; i >= 0; i--) {
    
    let nDigit = parseInt(value[i], 10);
    
    if (isSecond == true)
        nDigit *= 2;

    // Restamos 9 de los dígitos
    if (nDigit > 9)
        nDigit -= 9;

    nCheck += nDigit;
    isSecond = !isSecond;
  }

  return (nCheck % 10 === 0);
}


