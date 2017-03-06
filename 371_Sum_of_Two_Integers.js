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

  it('returns sum of one negative, one positive numbers', () => {
    //arrange
    const a = -1415;
    const b = 123;
    const expected = a + b;
    //act
    const actual = getSum(a, b);
    //assert
    expect(actual).toBe(expected);
  });

  it('returns sum of two negative integers', () => {
    //arrange
    const a = -1415;
    const b = -1123;
    const expected = a + b;
    //act
    const actual = getSum(a, b);
    //assert
    expect(actual).toBe(expected);
  });

  it('returns 0', () => {
    //arrange
    const a = -1415;
    const b = 1415;
    const expected = 0;
    //act
    const actual = getSum(a, b);
    //assert
    expect(actual).toBe(expected);
  });

  it('returns sum of large integers(but not overflow)', () => {
    //arrange
    const a = 2147483646;
    const b = 1;
    const expected = a + b;
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
