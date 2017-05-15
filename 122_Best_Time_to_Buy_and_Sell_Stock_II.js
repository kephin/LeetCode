/*
122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit.
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

const expect = require('expect');

describe('122 Best Time to Buy and Sell Stock II', () => {
  it('returns the maximum profit', () => {
    //arrange
    const input = [1, 5, 2, 4, 6, 7];
    const expected = 9;
    //act
    const actual = maxProfit(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const maxProfit = (prices) => {
  let maxProfit = 0;
  for (let index = 0; index < prices.length - 1; index++) {
    const singleProfit = prices[index + 1] - prices[index];
    if (singleProfit > 0) maxProfit += singleProfit;
  }
  return maxProfit;
};
