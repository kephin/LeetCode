/*
349. Intersection_of Two Arrays

Given two arrays, write a function to compute their intersection.

Note:
Each element in the result must be unique.
The result can be in any order.
*/

const expect = require('expect');

describe('349 Intersection_of Two Arrays', () => {
  it('returns intersection of two arrays', () => {
    //arrange
    const num_1 = [1, 5, 2, 3, 4, 6, 7, 3, 2, 5, 6, 1];
    const num_2 = [1, 2, 5, 7, 8, 3, 2, 6, 3, 2];
    const input = [num_1, num_2];
    const expected = [1, 5, 2, 3, 6, 7];
    //act
    const actual = intersection(...input);
    //assert
    //the result can be in any order
    expect(actual.sort()).toEqual(expected.sort());
  });
});

const intersection = (num1, num2) => {
  const tempHash = {};
  const returnHash = {};
  num1.forEach(value => {
    if (!tempHash[value]) tempHash[value] = true;
  });
  num2.forEach(value => {
    if (tempHash[value]) returnHash[value] = true;
  });
  return Object.keys(returnHash).map(value => parseInt(value));
};
