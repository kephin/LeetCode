/*
151. Reverse Words in a String

Given an input string, reverse the string word by word.
*/

const expect = require('expect');

describe('151 Reverse Words in a String', () => {
  it('returns reversed words', () => {
    //arrange
    const input = ' the  sky    is  blue   ';
    const expected = 'blue is sky the';
    //act
    const actual = reverseWords(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const reverseWords = str => str.trim().split(/\s+/).reverse().join(' ');
