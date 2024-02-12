"use strict";

// NOW, We have to learn Array Methods;

// SLICE (IMPORTANT TOPIC)
// SLICE Method extract elements in a "NEW Array", It contains two parameters (start, end);
const arr = ["a", "b", "c", "d"];
console.log(arr.slice(1)); // It will return new array from index 1 to the end!
console.log(arr.slice(1, 3)); // It will not count the last element!
console.log(arr.slice()); // Where nothing shows all elements in the new array!
console.log(arr.slice(-1)); // In negative it starts the counting from last & retrieve that element!
console.log(arr.slice(-3)); // It will retrieve the elements from last index (d, c, b) but in console it will return in ascending order!
console.log(arr.slice(-1, -2)); // It will show undefined bcz in negative there is no ending parameter
console.log(arr.slice(-0)); // In neg there is also not -0
console.log(arr.slice(0, -2)); // In negative slice, the last parameter dont extract except everything(which is in first parameter)!

// SPLICE (IMPORTANT TOPIC)
// Removes or replaces existing elements and/or adds new elements in the existing array "They DONT create new array"! It contains two parameters (start, end);
const arr2 = ["a", "b", "c", "d"];
console.log(arr2.splice(1, 2)); // It will pick/retrieve/extract from index 1 to 2 (b & c)!
console.log(arr2.splice(0)); // It will retrieve remaining elements from index 0
const arr3 = ["a", "b", "c", "d"];
console.log(arr3.splice(1)); // It will retrieve elements from index 1
const arr4 = ["a", "b", "c", "d"];
console.log(arr4.splice(-2)); // It will retrieve elements from last index 3 to 2 (d and c)
console.log(arr4.splice(-4)); // It will retrieve remaining elements from index 1 to 0 (b and a)
console.log(arr4.splice()); // It shows empty array
const arr5 = ["a", "b", "c", "d"];
console.log(arr5.splice(0, 3)); // But when it starts from index 0 then it will not count last element

// REVERSE (BASIC TOPIC)
// The reverse() method returns the existing array in reverse order. "They DONT create new array"!
const arr6 = ["a", "b", "c", "d"];
let arr7 = ["h", "g", "f", "e"];
const reversedArr = arr7.reverse();
console.log(reversedArr);

// CONCAT (BASIC TOPIC)
// The concat() method returns a "NEW" array by merging two or more values/arrays.
const concat = arr6.concat(arr7);
console.log(concat);

// JOIN (BASIC TOPIC)
//The join() method returns a "NEW" string by concatenating all of the elements in an array, separated by a specified separator.

const join = concat.join(" - ");
console.log(join);

// ES6 "AT" METHOD (BASIC TOPIC)
// It will show Index of an array or strings;

const marks = [45, 40, 49];
console.log(marks[0]);
// For finding the last index that comes from an API
console.log(marks[-1]); // Now at this situation when you want to find the last index of an array the negative number shows 'undefined'.
console.log(marks.slice(-1)[0]); // It will return the value in an array but we dont want in an array then we write[0]
// NOW Doing with 'At' method
console.log(marks.at(-1));
console.log(marks.at(0));

const word = "Sulaman";
console.log(word.at(0));
console.log(word.at(1));
console.log(word.at(-1));

// FOREACH LOOP (MOST IMPORTANT TOPIC);
// The forEach() method executes a provided function for each array element. The syntax of the forEach() method is: " arr.forEach(callback(currentValue), thisArg) ".
// The forEach() method takes in:
// > callback - The function to execute on every array element. It takes in:
// > currentValue - The current element being passed from the array.
// > thisArg (optional) - Value to use as this when executing callback. By default, it is undefined
// ↟ forEach(callback function, current value(index), this-arg)
// > forEach() Returns undefined.
// > forEach() does not change the original array.
// > forEach() executes callback once for each array element in order.
// > forEach() does not execute callback for array elements without values. just like [12 , , 13] it will not execute empty array!

// Example:
// Doing from For Of loop;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("--------------------- FOR OF ------------------------------");
for (const [i, move] of movements.entries()) {
  if (move > 0) {
    console.log(`Movement ${i + 1}: You deposited ${move}$ in your account`);
  } else {
    console.log(
      `Movement ${i + 1}: You withdrew ${Math.abs(move)}$ from your account`
    );
  }
}

console.log("--------------------- FOR EACH ------------------------------");

// Doing Exact samething from FOR EACH loop;
movements.forEach(function (move, i) {
  if (move > 0) {
    console.log(`Movement ${i + 1}: You deposited ${move}$ in your account`);
  } else {
    console.log(
      `Movement ${i + 1}: You withdrew ${Math.abs(move)}$ from your account`
    );
  }
});

// Now you might say that "Which one we use??"
// Answer is that its up to you.
// But in my opininon the best answer is FOR Each loop bcz its simple and easy!

// Example '2':
// Now you can also set up for-Each loop with MAPS & SETS;

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
// In "MAP" the first array is an entry and in an array there is the ("key" in first) and ("value" in second)!

console.log("--------------------- FOR EACH WITH MAP ---------------------");

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log("--------------------- FOR EACH WITH SETS ---------------------");

const repeatCurrency = new Set(["USD", "USD", "EUR", "GBP", "GBP"]);
console.log(repeatCurrency);
// Where Set makes unique array! with NO repeated strings.

repeatCurrency.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`);
});
// In Set, there is no key and value is repeat as repeat where developers omitted the key in FOR-EACH loop!

// InnerHTML (BASIC TOPIC);
// The innerHTML property is a part of the Document Object Model (DOM) that is used to set or return the HTML content of an element. Where the return value represents the text content of the HTML element including tags etc all!
const bodyHTML = document.querySelector("body");
console.log(bodyHTML.innerHTML);

// InsertAdjacentHTML (BASIC TOPIC);
// The insertAdjacentHTML() is a method of the Element interface so that you can invoke it from any element.
// "AND"
// The insertAdjacentHTML() method parses a piece of HTML text and inserts the resulting nodes into the DOM tree at a specified position:
// SYNTAX: "element.insertAdjacentHTML(positionName, text);"
// The insertAdjacentHTML() method has two parameters:

// 1) position
// The positionName is a string that represents the position relative to the element. The positionName accepts one of the following four values:

// 'beforebegin': before the element
// 'afterbegin': before its first child of the element.
// 'beforeend': after the last child of the element
// 'afterend': after the element
// Note that the 'beforebegin' and 'afterend' are only relevant if the element is in the DOM tree and has a parent element.

// The insertAdjacentHTML() method has no return value, or undefined by default.

// 2) text
// The text parameter is a string that the insertAdjacentHTML() method parses as HTML or XML. It cannot be Node objects

// Security consideration
// Like the innerHTML, if you use the user input to pass into the insertAdjacentHTML() method, you should always escape it to avoid security risk.

// CODING CHALLENGE # 1;

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const anotherJuliaData = [9, 16, 6, 8, 3];
const anotherKateData = [10, 5, 6, 1, 4]

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCorrected = dogsJulia.slice(1, 3);

  const bothArr = juliaCorrected.concat(dogsKate);

  bothArr.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult 🐶, and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs(juliaData, kateData);
checkDogs(anotherJuliaData, anotherKateData)

// Challenge Completed!!

