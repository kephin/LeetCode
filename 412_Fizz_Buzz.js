/*
412. Fizz Buzz

Write a program that outputs the string representation of numbers from 1 to n.
But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/

const expect = require('expect');

it('412 Fizz Buzz', () => {
  //arrange
  const n = 15;
  const expected = [
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz',
  ];
  //act
  const actual = fizzBuzz(n);
  //assert
  expect(actual).toEqual(expected);
});

const fizzBuzz = (n) => {
  const arr = [];
  for (let index = 1; index <= n; index++) {
    if (index % 15 === 0) {
      arr.push('FizzBuzz');
    } else if (index % 3 === 0) {
      arr.push('Fizz');
    } else if (index % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(index.toString());
    }
  }
  return arr;
};
