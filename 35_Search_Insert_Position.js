/*
35. Search Insert Position

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.
*/

const expect = require('expect');

describe('35 Search Insert Position', () => {
  it('returns inserted position should be 2', () => {
    //arrange
    const nums = [1, 3, 5, 6];
    const target = 5;
    const expected = 2;
    //act
    const actual = searchInsert(nums, target);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns inserted position should be 1', () => {
    //arrange
    const nums = [1, 3, 5, 6];
    const target = 2;
    const expected = 1;
    //act
    const actual = searchInsert(nums, target);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns inserted position should be 0', () => {
    //arrange
    const nums = [1, 3, 5, 6];
    const target = 0;
    const expected = 0;
    //act
    const actual = searchInsert(nums, target);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns inserted position should be 4', () => {
    //arrange
    const nums = [1, 3, 5, 6];
    const target = 7;
    const expected = 4;
    //act
    const actual = searchInsert(nums, target);
    //assert
    expect(actual).toBe(expected);
  });
});

// O(n) time
const searchInsert_1 = (nums, target) => {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) return index;
    if (target > nums[index] && target < nums[index + 1]) return index + 1;
  }
};

// O(logn) time: binary search
const searchInsert = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] < target) low = mid + 1;
    else {
      high = mid - 1;
    }
  }
  return low;
};
