/*
500. Keyboard Row

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard.
*/

const expect = require('expect');

describe('500 Keyboard Row', () => {
  it('returns ', () => {
    //arrange
    const input = ['Hello', 'Alaska', 'Dad', 'Peace'];
    const expected = ['Alaska', 'Dad'];
    //act
    const actual = findWords(input);
    //assert
    expect(expected).toBe(actual);
  });
});

const findWords = (words) => {
  const result = [];
  const keyboardRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

  words.forEach(word => {
    const wordSet = new Set(word.toLowerCase().split(''));

    for (const keyboardRow of keyboardRows) {
      if ([...wordSet].every(val => keyboardRow.includes(val))) return result.push(word);
    }
  });
  return result;
};
