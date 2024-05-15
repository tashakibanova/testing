export default function luhnAlgoritm(value) {
  return value.split('').reverse().map(Number).map((n, i) => i % 2 ? n * 2 : n).map(n => n > 9 ? (n % 10) + 1 : n).reduce((a, b) => a + b) % 10 === 0;
}

