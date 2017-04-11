/*
557. Reverse Words in a String III

Given a string, you need to reverse the order of characters in each word within a sentence.
While still preserving whitespace and initial word order.
*/

const expect = require('expect');

describe('557 Reverse Words in a String III', () => {
  it('returns reverse words', () => {
    //arrange
    const input = `Let's take LeetCode contest`;
    const expected = `s'teL ekat edoCteeL tsetnoc`;
    //act
    const actual = reverseWords(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const reverseWords = sentence => sentence
  .split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');
