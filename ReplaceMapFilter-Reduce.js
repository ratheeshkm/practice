const numbers = [-5, 6, 2, 0];

console.log(
  numbers.map((item) => (item > 0 ? item * 2 : '')).filter((item) => !!item)
);

const doubledPositiveIntegers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    accumulator.push(currentValue * 2);
  }
  return accumulator;
}, []);

console.log(doubledPositiveIntegers);
