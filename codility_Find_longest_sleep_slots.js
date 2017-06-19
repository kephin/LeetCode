/*
Codility
find the longest sleep slots
*/
const expect = require('expect');

describe('Codility - find the longest sleep slots', () => {
  it('returns the longest sleep slot', () => {
    //arrange
    const input = 'Sun 10:00-20:00\nFri 05:00-10:00\nFri 16:30-23:50\nSat 10:00-24:00\nSun 01:00-04:00\nSat 02:00-06:00\nTue 03:30-18:15\nTue 19:00-20:00\nWed 04:25-15:14\nWed 15:14-22:40\nThu 00:00-23:59\nMon 05:00-13:00\nMon 15:00-21:00';
    const expected = 505;
    //act
    const actual = findLongestSleepSlots(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const findLongestSleepSlots => str {
  const table = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };
  const meetings = str
    .split('\n')
    .map(str => {
      const date = table[str.slice(0, 3)];
      const start = parseInt(str.slice(4, 6), 10) * 60 + parseInt(str.slice(7, 9), 10) + date * 1440;
      const end = parseInt(str.slice(10, 12), 10) * 60 + parseInt(str.slice(13, 15), 10) + date * 1440;
      return [start, end];
    })
    .sort((prev, next) => prev[0] - next[0]);

  const slots = [];
  for (let index = 0; index < meetings.length; index++) {
    if (index === 0) slots.push(meetings[0][0]);
    else { slots.push(meetings[index][0] - meetings[index - 1][1]) }
  }
  slots.push(1440 * 7 - meetings[meetings.length - 1][1]);
  return slots.sort((prev, next) => prev - next).pop();
};
