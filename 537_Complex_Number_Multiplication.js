/*
537. Complex Number Multiplication

Given two strings representing two complex numbers.
You need to return a string representing their multiplication.Note i2 = -1 according to the definition.

Note: The input strings will not have extra blank.
The input strings will be given in the form of a + bi,
where the integer a and b will both belong to the range of[-100, 100].And the output should be also in this form.
*/

const expect = require('expect');

describe('537 Complex Number Multiplication', () => {
  it('returns correct complex number', () => {
    //arrange
    const first = '1+1i';
    const second = '1+1i';
    const expected = '0+2i';
    //act
    const actual = complexNumberMultiply(first, second);
    //assert
    expect(actual).toBe(expected);
  });

  it('returns correct complex number', () => {
    //arrange
    const first = '1+-1i';
    const second = '1+-1i';
    const expected = '0+-2i';
    //act
    const actual = complexNumberMultiply(first, second);
    //assert
    expect(actual).toBe(expected);
  });
});

const complexNumberMultiply = (first, second) => {
  const firstArray = first.split('+').map(value => parseInt(value));
  const secondArray = second.split('+').map(value => parseInt(value));
  const real = firstArray[0] * secondArray[0] - firstArray[1] * secondArray[1];
  const imaginary = firstArray[0] * secondArray[1] + firstArray[1] * secondArray[0];
  return `${real}+${imaginary}i`;
};
