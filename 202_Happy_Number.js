/*
202. Happy Number

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer,
replace the number by the sum of the squares of its digits,
and repeat the process until the number equals 1 (where it will stay),
or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

1^2 + 9^2       = 82
8^2 + 2^2       = 68
6^2 + 8^2       = 100
1^2 + 0^2 + 0^2 = 1
*/

const expect = require('expect');

describe('202 Happy Number', () => {
  it('returns true', () => {
    //arrange
    const input = 19;
    const expected = true;
    //act
    const actual = isHappy(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const isHappy = number => {
  const obj = {};
  const generateNewNum = num => {
    if (num === 1) return true;
    if (obj[num]) return false;

    obj[num] = true;
    const newNumber = num
      .toString()
      .split('')
      .map(val => parseInt(val, 10))
      .reduce((acc, cur) => acc + cur ** 2, 0);

    return generateNewNum(newNumber);
  };
  return generateNewNum(number);
};
