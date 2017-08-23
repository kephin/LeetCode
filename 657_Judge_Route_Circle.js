/*
657. Judge Route Circle

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
*/

const expect = require('expect');

describe('657 Judge Route Circle', () => {
  it('returns true', () => {
    //arrange
    const input = 'UD';
    const expected = true;
    //act
    const actual = judgeCircle(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns false', () => {
    //arrange
    const input = 'LL';
    const expected = false;
    //act
    const actual = judgeCircle(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const judgeCircle = moves => {
  let vertical = 0;
  let horizontal = 0;
  for (let i = 0, x = moves.length; i < x; i++) {
    switch (moves[i]) {
      case 'L':
        horizontal--;
        break;
      case 'R':
        horizontal++;
        break;
      case 'U':
        vertical++;
        break;
      case 'D':
        vertical--;
        break;
    }
  }
  return vertical === 0 && horizontal === 0;
};
