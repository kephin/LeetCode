/*
506. Relative Ranks

Given scores of N athletes, find their relative ranks and the people with the top three highest scores,
who will be awarded medals: "Gold Medal", "Silver Medal"
and "Bronze Medal".

Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
*/

const expect = require('expect');

describe.only('506 Relative Ranks', () => {
  it('returns relative ranks', () => {
    //arrange
    const input = [53, 14, 35, 82, 21, 11];
    const expected = ['Silver Medal', '5', 'Bronze Medal', 'Gold Medal', '4', '6'];
    //act
    const actual = findRelativeRanks(input);
    //assert
    expect(actual).toEqual(expected);
  });
});

const findRelativeRanks = (nums) => {
  const tableForTop3 = {
    1: 'Gold Medal',
    2: 'Silver Medal',
    3: 'Bronze Medal',
  };
  const table = {};
  const sortedNums = [...nums]
    .sort((prev, next) => next - prev)
    .map((value, index) => {
      table[value] = index + 1;
    });
  return nums.map(value => {
    if (table[value] > 3) return table[value].toString();
    return tableForTop3[table[value]];
  });
};
