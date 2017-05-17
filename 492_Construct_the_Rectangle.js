/*
492. Construct the Rectangle

For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

1. The area of the rectangular web page you designed must equal to the given target area.
2. The width W should not be larger than the length L, which means L >= W.
3. The difference between length L and width W should be as small as possible.

You need to output the length L and the width W of the web page you designed in sequence.

Note:
The given area won't exceed 10,000,000 and is a positive integer
The web page's width and length you designed must be positive integers.
*/

const expect = require('expect');

describe('492 Construct the Rectangle', () => {
  it('returns the length and the width', () => {
    //arrange
    const input = 1;
    const expected = [1, 1];
    //act
    const actual = constructRectangle(input);
    //assert
    expect(expected).toEqual(actual);
  });
  it('returns the length and the width', () => {
    //arrange
    const input = 121;
    const expected = [11, 11];
    //act
    const actual = constructRectangle(input);
    //assert
    expect(expected).toEqual(actual);
  });
  it('returns the length and the width', () => {
    //arrange
    const input = 1525;
    const expected = [61, 25];
    //act
    const actual = constructRectangle(input);
    //assert
    expect(expected).toEqual(actual);
  });
});

const constructRectangle = area => {
  const floorSqrt = Math.floor(Math.sqrt(area));
  for (let index = floorSqrt; index > 0; index--) {
    if (area % index === 0) return [area / index, index];
  }
};
