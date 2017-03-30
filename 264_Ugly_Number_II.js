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

const nthUglyNumber_1 = (n) => {
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

const nthUglyNumber = (n) => {
  const ugly = [];
  ugly[0] = 1;

  let [index2, index3, index5] = [0, 0, 0];
  let [factor2, factor3, factor5] = [2, 3, 5];

  for (let index = 1; index < n; index++) {
    const min = Math.min(factor2, factor3, factor5);
    ugly[index] = min;
    if (factor2 === min) factor2 = 2 * ugly[++index2];
    if (factor3 === min) factor3 = 3 * ugly[++index3];
    if (factor5 === min) factor5 = 5 * ugly[++index5];
  }
  return ugly[n - 1];
};
