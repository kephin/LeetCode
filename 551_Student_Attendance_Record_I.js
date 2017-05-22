/*
551_Student_Attendance_Record I

You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
You need to return whether the student could be rewarded according to his attendance record.
*/

const expect = require('expect');

describe('551 Student Attendance Record I', () => {
  it('returns true', () => {
    //arrange
    const input = 'PPALLP';
    const expected = true;
    //act
    const actual = checkRecord(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns false', () => {
    //arrange
    const input = 'PPALLL';
    const expected = false;
    //act
    const actual = checkRecord(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns false', () => {
    //arrange
    const input = 'LALL';
    const expected = true;
    //act
    const actual = checkRecord(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const checkRecord = records => {
  let a = 0;
  let l = 0;
  for (const char of[...records]) {
    if (char === 'A') a++;
    if (char === 'L') l++;
    else {
      l = 0;
    }
    if (a > 1 || l > 2) return false;
  }
  return true;
};
