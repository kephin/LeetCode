/*
504. Base 7

Given an integer, return its base 7 string representation.

Note: The input will be in range of [-1e7, 1e7].
*/

const expect = require('expect');

describe('504 Base 7', () => {
  it('returns a base 7 number', () => {
    //arrange
    const input = 100;
    const expected = '202';
    //act
    const actual = convertToBase7(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const convertToBase7 = num => num.toString(7);
