/*
191. Number of 1 Bits
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
*/

const expect = require('expect');

describe('191 Number of 1 Bits', () => {
  it('returns Hamming weight', () => {
    //arrange
    const number = 789012340567;
    const expected = 26;
    //act
    const actual = hammingWeight(number);
    //assert
    expect(actual).toBe(expected);
  });
});

const hammingWeight = (n) => n
  .toString(2)
  .split('')
  .map(value => parseInt(value))
  .reduce((prev, next) => prev + next);
