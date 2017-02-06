/*
461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 <= x, y < 2^31
*/

const expect = require('expect');

describe('461 Hamming Distance', () => {
  it('regular situation', () => {
    //arrange
    const x = 1;
    const y = 4;
    const expected = 2;
    //act
    const actual = hammingDistance(x, y);
    //assert
    expect(actual).toBe(expected);
  });

  it('large number', () => {
    //arrange
    const x = 1577962638;
    const y = 1727613287;
    const expected = 16;
    //act
    const actual = hammingDistance(x, y);
    //assert
    expect(actual).toBe(expected);
  });

  it('same number', () => {
    //arrange
    const x = 16;
    const y = 16;
    const expected = 0;
    //act
    const actual = hammingDistance(x, y);
    //assert
    expect(actual).toBe(expected);
  });
});

const hammingDistance = (x, y) => {
  if (x === y) return 0;

  // make sure x is larger
  if (x < y) {
    [x, y] = [y, x];
  }

  const [parseLarger, parseLesser] = [x, y].map(item => item
    .toString(2)
    .split('')
    .map(value => parseInt(value)));

  const lengthDiff = parseLarger.length - parseLesser.length;
  const newArray = [];

  for (let index = 0; index < parseLarger.length; index++) {
    if (index < lengthDiff) {
      newArray.push(parseLarger[index]);
    } else {
      newArray.push(parseLarger[index] + parseLesser[index - lengthDiff]);
    }
  }

  return newArray
    .filter(value => value === 1)
    .reduce((prev, next) => prev + next, 0);
};
