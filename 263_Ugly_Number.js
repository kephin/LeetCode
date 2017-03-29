/*263. Ugly Number

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.
*/

const expect = require('expect');

describe('263 Ugly Number', () => {
  it('ugly number returns true', () => {
    //arrange
    const num = 8;
    const expected = true;
    //act
    const actual = isUgly(num);
    //assert
    expect(actual).toEqual(expected);
  });
  it('not a ugly number returns false', () => {
    //arrange
    const num = 14;
    const expected = false;
    //act
    const actual = isUgly(num);
    //assert
    expect(actual).toEqual(expected);
  });
});

const isUgly_1 = num => {
  if (num === 0) return false;
  if (num === 1) return true;

  const devidedBy5 = num => {
    if (num % 5 !== 0) {
      return num === 1;
    }
    return devidedBy5(num / 5);
  };

  const devidedBy3 = num => {
    if (num % 3 !== 0) return devidedBy5(num);
    return devidedBy3(num / 3);
  };

  const devidedBy2 = num => {
    if (num % 2 !== 0) return devidedBy3(num);
    return devidedBy2(num / 2);
  };

  return devidedBy2(num);
};

const isUgly = num => {
  for (const p of [2, 3, 5]) {
    while (num && num % p === 0) { num /= p; }
  }
  return num === 1;
};
