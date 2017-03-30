/*
264. Ugly Number II

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number, and n does not exceed 1690.
*/

const expect = require('expect');

describe('264 Ugly Number II', () => {
  it('returns n-th ugly number', () => {
    //arrange
    const num = 1234;
    const expected = 210937500;
    //act
    const actual = nthUglyNumber(num);
    //assert
    expect(actual).toEqual(expected);
  });
});

const nthUglyNumber = (n) => {
  const arr = [1];
  const backupList = [];

  const binarySearchAndInsert = (list, number) => {
    if (list.length === 0) return list.push(number);
    if (number < list[0]) return list.unshift(number);
    if (number > list[list.length - 1]) return list.push(number);

    let low = 0;
    let high = list.length - 1;
    while (low < high) {
      const mid = Math.ceil((low + high) / 2);
      const guessHigh = list[mid];
      const guessLow = list[mid - 1];
      if (guessHigh > number && guessLow < number) return list.splice(mid, 0, number);
      if (guessHigh < number) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }
  };

  while (arr.length < n) {
    for (const prime of[2, 3, 5]) {
      const lastNumInArr = arr[arr.length - 1];
      const ugly = lastNumInArr * prime;
      binarySearchAndInsert(backupList, ugly);
    }
    arr.push(backupList.shift());
  }
  return arr.pop();
};
