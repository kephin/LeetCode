/*
344. Reverse String

Write a function that takes a string as input and returns the string reversed.
*/

const expect = require('expect');

it('344 Reverse String', () => {
  //arrange
  const string = 'hello';
  const expected = 'olleh';
  //act
  const actual = reverseString_6(string);
  //assert
  expect(actual).toBe(expected);
});

// solution#1: plain string
const reverseString_1 = (string) => {
  let newString = '';
  for (let index = string.length - 1; index >= 0; index--) {
    newString = newString.concat(string[index]);
  }
  return newString;
}

// solution#2: take it as an array
const reverseString_2 = (string) => {
  const newArray = [];
  for (let index = 0; index < string.length; index++) {
    newArray.unshift(string[index]);
  }
  return newArray.join('');
}

// solution#3: array built-in method
const reverseString_3 = (string) => string
  .split('')
  .reverse()
  .join('');

// solution#4: recursive
const reverseString_4 = (string) => (string === '') ? '' : reverseString_4(string.substr(1)) + string.charAt(0);

// solution#5: half-index recursion
const reverseString_5 = (string) => {
  if (string.length < 2) return string;
  const halfIndex = Math.ceil(string.length / 2);
  return reverseString_5(string.substr(halfIndex)) + reverseString_5(string.substr(0, halfIndex));
};

// solution#6 : half-index head-end-swap
const reverseString_6 = (string) => {
  let newString = string.split('');
  for (let index = 0; index < Math.floor(newString.length / 2); index++) {
    [newString[index], newString[newString.length - 1 - index]] = [newString[newString.length - 1 - index], newString[index]];
  }
  return newString.join('');
}
