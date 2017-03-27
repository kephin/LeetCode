/*
507. Perfect Number

We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

Note: The input number n will not exceed 100,000,000.
*/

const expect = require('expect');

describe('507 Perfect Number', () => {
  it('returns true', () => {
    //arrange
    const input = 28;
    const expected = true;
    //act
    const actual = checkPerfectNumber(input);
    //assert
    expect(expected).toBe(actual);
  });

  it('returns true', () => {
    //arrange
    const input = 496;
    const expected = true;
    //act
    const actual = checkPerfectNumber(input);
    //assert
    expect(expected).toBe(actual);
  });

  it('returns true', () => {
    //arrange
    const input = 33550336;
    const expected = true;
    //act
    const actual = checkPerfectNumber(input);
    //assert
    expect(expected).toBe(actual);
  });
});

const checkPerfectNumber = (num) => {
  if (num === 1) return false;
  const divisors = [1];
  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      divisors.push(index);
      divisors.push(num / index);
    }
  }
  const sum = divisors.reduce((acc, cur) => acc + cur);
  return sum === num;
};
