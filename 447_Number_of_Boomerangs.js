/*
447. Number of Boomerangs

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).
*/

const expect = require('expect');

describe('447 Number of Boomerangs', () => {
  it('returns number of boomeranges', () => {
    //arrange
    const input = [
      [0, 0],
      [1, 0],
      [2, 0],
    ];
    const expected = 2;
    //act
    const actual = numberOfBoomerangs(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns number of boomeranges', () => {
    //arrange
    const input = [
      [0, 0],
      [3, 4],
      [-3, 4],
      [-3, -4],
      [3, -4],
      [5, 0],
      [-5, 0],
      [0, 5],
      [0, -5],
    ];
    const expected = 80;
    //act
    const actual = numberOfBoomerangs(input);
    //assert
    expect(actual).toBe(expected);
  });
});

// O(n^2) time / O(n) space
const numberOfBoomerangs = points => {
  let boomeranges = 0;
  for (const [indexA, pointA] of points.entries()) {
    const hash = {};
    for (const [indexB, pointB] of points.entries()) {
      if (indexA === indexB) continue;
      const distance = getDistance(pointA, pointB);
      if (!hash[distance]) hash[distance] = 1;
      else {
        hash[distance]++;
      }
    }
    for (const value of Object.values(hash)) {
      if (value > 1) boomeranges += value * (value - 1);
    }
  }
  return boomeranges;
};

const getDistance = (pointA, pointB) => ((pointA[0] - pointB[0]) ** 2) + ((pointA[1] - pointB[1]) ** 2);
