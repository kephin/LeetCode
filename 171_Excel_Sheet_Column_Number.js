/*
171. Excel Sheet Column Number

Related to question Excel Sheet Column Title
Given a column title as appear in an Excel sheet, return its corresponding column number.
*/

const expect = require('expect');

describe('171 Excel Sheet Column Number', () => {
  it('returns column number', () => {
    //arrange
    const input = "AT";
    const expected = 46;
    //act
    const actual = titleToNumber(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns column number', () => {
    //arrange
    const input = "TGED";
    const expected = 356386;
    //act
    const actual = titleToNumber(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const titleToNumber_1 = string => [...string]
  .reverse()
  .map((value, index) => (value.charCodeAt(0) - 64) * (26 ** index))
  .reduce((acc, cur) => acc + cur, 0);

// more concise but not straight forward
const titleToNumber_2 = string => [...string]
  .reverse()
  .reduce((acc, cur, index) => acc + (cur.charCodeAt(0) - 64) * (26 ** index), 0);
