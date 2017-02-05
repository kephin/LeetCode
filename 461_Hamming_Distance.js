/*
461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 <= x, y < 2^31
*/

const expect = require('expect');

it('461 Hamming Distance', () => {
  //arrange
  const x = 1;
  const y = 4;
  const expected = 2;
  //act
  const actual = hammingDistance(x, y);
  //assert
  expect(actual).toBe(expected);
});

const hammingDistance = (x, y) => {
  return (parseInt(x.toString(2)) + parseInt(y.toString(2)))
    .toString()
    .split('')
    .map(value => parseInt(value))
    .filter(value => value === 1)
    .reduce((prev, next) => prev + next);
};
