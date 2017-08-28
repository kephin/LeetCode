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
  it('returns false', () => {
    //arragne
    const ransomNote = 'fffbfgzz';
    const magazine = 'effjfggbffjdgbjjhhdeghz';
    const input = [ransomNote, magazine];
    const expected = false;
    //act
    const actual = canConstruct(...input);
    //assert
    expect(actual).toBe(expected);
  });
});

// O(n^2)
const canConstruct_1 = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) return false;
  const magazineArr = [...magazine];
  for (const char of [...ransomNote]) {
    const index = magazineArr.indexOf(char);
    if (index === -1) return false;
    magazineArr.splice(index, 1);
  }
  return true;
};

// O(n)
const canConstruct = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) return false;
  const magazineObj = {};
  for (const char of [...magazine]) {
    if (!magazineObj[char]) magazineObj[char] = 0;
    magazineObj[char] += 1;
  }
  for (const char of [...ransomNote]) {
    if (!magazineObj[char]) return false;
    magazineObj[char] -= 1;
  }
  return true;
};
