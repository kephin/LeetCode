/*
383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.
*/

const expect = require('expect');

describe.only('383 Ransom Note', () => {
  it('returns false', () => {
    //arragne
    const ransomNote = 'money';
    const magazine = 'monster';
    const input = [ransomNote, magazine];
    const expected = false;
    //act
    const actual = canConstruct(...input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns true', () => {
    //arragne
    const ransomNote = 'want';
    const magazine = 'wanted';
    const input = [ransomNote, magazine];
    const expected = true;
    //act
    const actual = canConstruct(...input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns true', () => {
    //arragne
    const ransomNote = 'fffbfg';
    const magazine = 'effjfggbffjdgbjjhhdegh';
    const input = [ransomNote, magazine];
    const expected = true;
    //act
    const actual = canConstruct(...input);
    //assert
    expect(actual).toBe(expected);
  });
});

const canConstruct = (ransomNote, magazine) => {
  const magazineArray = [...magazine];
  let index;
  for (const char of[...ransomNote]) {
    index = magazineArray.indexOf(char);
    if (index === -1) break;
    magazineArray.splice(index, 1);
  }
  if (index === -1) return false;
  return true;
};
