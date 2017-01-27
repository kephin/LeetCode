###Reverse String
**Description:**

Write a function that takes a string as input and returns the string reversed.

**Example:**
Given s = "hello", return "olleh".

**Solution:**

```javascript
//1. string
const reverseString = (str) => {
  let newString = '';
  for(let index = str.length - 1; index >= 0; index--){
    newString = newString.concat(str[index]);
  }
  return newString;
}

//2. take it as an array
const reverseString = (str) => {
  let newArray = [];
  for(let index = 0; index < str.length; index++){
    newArray.push(str[index]);
  }
  return newArray.join('');
}

//3. array built-in method
const reverseString = (str) => str.split('').reverse().join('');

//4. recursive
const reverseString = (str) => (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);

//5. half-index recursion
const reverseString = (str) => {
if (str.length < 2)
  return str;
const halfIndex = Math.ceil(str.length / 2);
return reverse(str.substr(halfIndex)) + reverse(str.substr(0, halfIndex));
}
```
