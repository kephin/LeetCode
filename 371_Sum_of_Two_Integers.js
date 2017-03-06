/*
371. Sum of Two Integers

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
*/

const expect = require('expect');

describe('371 Sum of Two Integers', () => {
  it('returns sum of two integers', () => {
    //arrange
    const a = 7;
    const b = 3;
    const expected = 10;
    //act
    const actual = getSum(a, b);
    //assert
    expect(actual).toBe(expected);
  });
});

const getSum = (a, b) => {
  const remainder = a ^ b;
  const carry = a & b;
  if (carry !== 0) return getSum(remainder, carry << 1);
  return remainder;
};
