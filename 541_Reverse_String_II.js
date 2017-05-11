/*
541. Reverse String II

Given a string and an integer k
you need to reverse the first k characters for every 2k characters counting from the start of the string.
If there are less than k characters left, reverse all of them.
If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
*/

const expect = require('expect');

describe('541 Reverse String II', () => {
  it('returns reverse words', () => {
    //arrange
    const s = 'abcdefghijklmnopqr';
    const k = 4;
    const expected = 'dcbaefghlkjimnoprq';
    //act
    const actual = reverseStr(s, k);
    //assert
    expect(actual).toBe(expected);
  });
});

const reverseStr = (s, k) => {
  let newString = '';
  const reverseSubStr = str => str.split('').reverse().join('');
  for (let index = 0; index < s.length; index += 2 * k) {
    const subStrShouldReverse = s.substr(index, k);
    const subStrShouldNotReverse = s.substr(index + k, k);
    newString += reverseSubStr(subStrShouldReverse) + subStrShouldNotReverse;
  }
  return newString;
};
