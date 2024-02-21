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
const anotherKateData = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCorrected = dogsJulia.slice(1, 3);

  const bothArr = juliaCorrected.concat(dogsKate);

  bothArr.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult 🐶, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs(juliaData, kateData);
checkDogs(anotherJuliaData, anotherKateData);

// Challenge Completed!!

// MAP FUNCTION / METHOD (IMPORTANT TOPIC);
// MAP is a high order function that takes a callback function as an argument and applies that function to each element of the array, creating a "NEW Array" with the results!
// MAP returns a "NEW Array" containing the results of applying on operation on all original array elements!
// Example:

const numbers = [2, 4, 6, 8];
const mapFunction = numbers.map(function (num) {
  return num * 2;
});
console.log(mapFunction); // Returns NEW Array
console.log(...mapFunction); // Using Spread Operator

// Example 2:
const usdDollar = [20, 40, 100];
const usdToPak = 279;
const exchangeMoney = usdDollar.map(function (mon) {
  return mon * usdToPak;
});
console.log(exchangeMoney);
console.log(...exchangeMoney);

// Example 3: (With Arrow Function)

const salary3Months = [5000, 8000, 10000];
const creditMoney = salary3Months.map((runs) => console.log(runs));

// Example 4: (With Arrow Function)
// You can also put values in an empty array! ;
let array = [];
const array2 = [5000, 8000, 10000];
const Example2 = array2.map((runs) => array.push(runs));
console.log(array);
console.log(Example2); // It will return [1, 2, 3] because The map function is being used, but the callback function (runs) => array.push(runs) doesn't explicitly return a value.
// In JavaScript, when a function doesn't have an explicit "return" statement, it implicitly returns "undefined". Therefore, your Example2 array will be an array of "undefined" values based on the number of elements in array2.

// it can also be done like this ↓↓;
array = array2.map((run) => run);
console.log(array);

// Note:
// You cant put "return" in arrow function it will gave an error! Example ↓;
// const gaveError = map((num) => return 2 * num);

// FILTER FUNCTION / METHOD (IMPORTANT TOPIC):
// The filter () method creates a new array filled with elements that pass a test provided by a function. The filter () method does not execute the function for empty elements. The filter () method does not change the original array. Required. A function to run for each array element. Required. The value of the current element. Optional.
// "OR"
// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const positiveValue = movements2.filter(function (positiveValue) {
  if (positiveValue > 0) {
    return positiveValue;
  }
});
console.log(positiveValue);

const negativeValue = movements2.filter((negValue) => negValue < 0);
console.log(negativeValue);

// REDUCE FUNCTION / METHOD (IMPORTANT TOPIC):
// The reduce () method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// For every subsequent iteration, "ACC" receives the previous iteration’s return value. This is the tricky part of reduce. We named the parameter acc, because it’s like a snowball rolling down a hill; it accumulates the value of each iteration
const sumArray = [10, 50, 530, 20];
const sum = sumArray.reduce(function (acc, sumElement, i) {
  console.log(`Movement ${i + 1}: ${acc + sumElement}`);
  return acc + sumElement;
}, 0);

// Note: acc is compulsory in reduce function where after function closed curly bracket the value represents the "acc" value.

// Example 2:
// Find the maximum value ?
const maxValue = movements2.reduce(function (acc, currentIndex) {
  if (acc > currentIndex) {
    return acc;
  } else {
    return currentIndex;
  }
}, movements2[0]);
console.log(maxValue);

// Challenge 2:
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  const adults = humanAge.filter((currentIndex) => currentIndex > 18);
  const avg = adults.reduce(
    (acc, currentIndex, i, array) => acc + currentIndex / array.length,
    0
  );
  console.log(humanAge);
  console.log(adults);
  console.log(avg);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Challenge Completed!

// MAGIC OF CHAINING METHOD (MODERATE TOPIC)
// It is a method in which many functions comes to take place after by another!
// Example: We have to add positive numbers in a new array;

const moneyMovements = [200, 500, -800, 1500, -100, -200];

const summary = moneyMovements
  .map((mov) => mov)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(summary);

// Challenge 3:
const calcAverageHumanAge2 = function (movements) {
  const humanAge = movements
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((currentIndex) => currentIndex > 18)
    .reduce((acc, avg, i, array) => acc + avg / array.length, 0);
  console.log(humanAge);
};
calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// Challenge Completed!

// FIND METHOD / FUNCTION (IMPORTANT TOPIC);
// So usually the goal of the Find method is to just find exactly one element, and therefore we usually set up a condition where only one element can satisfy that condition.
// But remember it does NOT returns "NEW Array" !
// Example;

const tax = [100, 200, -300, -800];
const taxfind = tax.find((tax) => tax < 0);
console.log(taxfind); // Answer is -300
// it will retrieve first element only "one".

// FIND-INDEX METHOD/FUNCTION (IMPORTANT TOPIC);
// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// Result is array index of 3!

// SOME & EVERY METHOD (MODERATE TOPIC);
// The some() method of Array instances tests whether at least ONE element in the array passes the test implemented by the provided callback function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// Example:
const check = array1.some((arr) => arr > 100);
console.log(check);
// It is same as includes method ↓↓
console.log(array1.includes(130));
// But the difference is that it does not recieve call-back function!

// The every() method of Array instances tests whether ALL elements in the array pass the test implemented by the provided callback function. It returns a Boolean value. A function to execute for each element in the array. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise.
// Example 2:
console.log(array1.every((arr) => arr > 0));
console.log(array1.every((arr) => arr < 0));

// SEPARATE CALLBACK (BASIC TOPIC);
const greater = (mov) => mov > 0;
console.log(array1.some(greater));
console.log(array1.every(greater));
console.log(array1.filter(greater));

// FLAT & FLAT-MAP FUNCTION / METHOD:
// The flat () method is an inbuilt array method that flattens a given array into a newly created one-dimensional array. It concatenates all the elements of the given multidimensional array, and flats upto the specified depth. We can specify the depth limit to where we need to flatten the array. By default, the depth limit is 1.
// "OR"
// The falt() method returns the nested value of array into one dimensional array! and you can also specify its depth of array which is dimensioned more than one inside into another inside of array.
// Example 1:
const array3 = [[1, 2, 3], 4, 5, 6];
console.log(array3.flat());

// Example 2:
const array4 = [[1, [2, 3], 4], 5, 6, 7];
console.log(array4.flat(2)); // Now it takes the flat method into second level of destructing!

// Example 3: (FLAT-MAP);
// The flatMap() method returns a one dimensional array but in a new array of "map"! there is one only additional thing of "MAP".
const salary = {
  pay: [1000, 5000, 10000],
};
const salary2 = {
  pay: [2000, 8000, 12000],
};
const salaries = [salary, salary2];
const totalSalary = salaries
  .flatMap((mov) => mov.pay)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalSalary);
// Result is "38000".

// SORT METHOD (IMPORTANT TOPIC):
// Sort() is used to sort elements in an array!
// Sort() method sort elements as strings in lexicographics order, not alphabetically.
// Lexicographics means [alphabetic + numbers + symbols] consider as strings!

// Where ascending order has formula: a - b.
// Descending order has formula: b - a.

const alphabetic = ["Ant", "Jacquard", "Cat", "Tiger"];
console.log(alphabetic.sort());
const number = [20, 19, 12, 1, 5, 7, 8];
console.log(number.sort()); // It does not sort the numbers in ascending order!
console.log(number.sort((a, b) => a - b)); // It shows the result in ascending order.
console.log(number.sort((a, b) => b - a)); // It shows the result in descending order.
// It also works on objects.
console.log(salaries.flatMap((mov) => mov.pay).sort((a, b) => a - b));

// NOTE: Sort() mutates the original elements it does not create new array or object!

// FILL & FROM METHOD (IMPORTANT TOPIC):
// The fill() method in JavaScript is used to fill all the elements of an array with a static value. It modifies the original array and returns the modified array.
// How ever we wrote array like  this!
let x = [1, 2, 3, 4, 5];
// But now we also fill empty array like this↓
x = Array(7);
console.log(x); // It shows result as "7 length" OR "6 index empty".
// Now we fill this empty array
console.log(x.fill(1)); // It shows result as 1 in full array! [1, 1, 1, 1, 1, 1, 1]
// Where fill method use as slice method, because it also accepts parameter (your current-value/number, start index, last index but it does not count)
let y = Array(7);
console.log(y.fill(5, 1, 6));

// "ARRAY FROM" METHOD:
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// The array.from only used as Array.from(), you cannot call like x.from()!
console.log(Array.from("foo"));
// [ "f", "o", "o" ]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

console.log(Array.from({ length: 7 }, (_, i) => i + 1)); // You have to "create array ↖↖" or "retrieve array (means you have to first create array then call it ↙↙)" or "make the length of array ←←" for any functionality.
console.log(Array.from(x, (_, i) => i + 1));
// Always remember that in parameters the underscore means through out a value which means does not used the value, where pro programmar understand when ever they see that underscore!

// NOW WE HAVE LEARNED ABOUT 23 ARRAY METHODS! , SO THE QUESTION IS THAT WHEN WE USE THE ARRAY METHODS, WHERE!
// ANSWER IS IN PICTURE

// PRACTICE OF ARRAY METHODS;
// 1. Take out the total sum of deposit accounts
const account1 = { movement: [5000, -1000, 2000, -3000, 4000, 10000] };
const account2 = { movement: [6000, -2000, 8000, -1000, 4000, 4000] };
const accounts = [account1, account2];

const depositSum = accounts
  .flatMap((mov) => mov.movement)
  .filter((mov) => mov > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(depositSum);

const withdrawalSum = accounts
  .flatMap((mov) => mov.movement)
  .filter((mov) => mov < 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(withdrawalSum);

// 2. Take out all the movements
const movementLength = accounts
  .flatMap((mov) => mov.movement)
  .reduce((acc, mov) => (mov >= -3000 ? ++acc : mov), 0);
console.log(movementLength);

// 3. Take out the following deposit and withdrawal using reduce method
const sumz = accounts
  .flatMap((mov) => mov.movement)
  .reduce(
    (acc, curr) => {
      curr > 0 ? (acc.deposit += curr) : (acc.withdrawal += curr);
      return acc; // We have to return these values otherwise it will return undefined!
    },
    { deposit: 0, withdrawal: 0 } // You can also specify as an object and insert the values!
  );
console.log(sumz);

// OR More Advanced; Destruct it:
const { deposit, withdrawal } = accounts
  .flatMap((mov) => mov.movement)
  .reduce(
    (acc, curr) => {
      curr > 0 ? (acc.deposit += curr) : (acc.withdrawal += curr);
      return acc; // We have to return these values otherwise it will return undefined!
    },
    { deposit: 0, withdrawal: 0 } // You can also specify as an object and insert the values!
  );
console.log(deposit, withdrawal);

// 4. Convert the satement into this: this is a nice title --> This Is a Nice Title. Remember: exception values must be small letters
const capitalize = function (title) {
  const exceptions = ["a", "an", "and", "with", "but", "or", "on"];

  const lowerCase = title.toLowerCase().split(" ");
  const firstUpperCase = lowerCase
    .map((word) =>
      exceptions.includes(word)
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  console.log(firstUpperCase);
};
capitalize("this is a nice TITLE");
capitalize("And here we go again");

// Challenge 4 (Important Challenge);
// Your tasks:

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose)

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false).

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false).

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.).

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects)

// Hints:
// §) Use many different tools to solve these challenges, you can use the summary lecture to choose between them.

// §) Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

// DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
const dogLoop = dogs.forEach(
  (dogs) => (dogs.recfood = Math.trunc(dogs.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
const sarahDog = dogs.find((dogs) => dogs.owners.includes("Sarah"));
console.log(sarahDog);
const statement2 = `Sarah Dog eat too ${
  sarahDog.curFood > sarahDog.recfood ? "much" : "little"
}`;
console.log(statement2);

// 3.
const eattoomuch = dogs
  .filter((dogs) => dogs.curFood > dogs.recfood)
  .flatMap((own) => own.owners);
console.log(eattoomuch);

const eattooless = dogs
  .filter((dogs) => dogs.curFood <= dogs.recfood)
  .flatMap((own) => own.owners);
console.log(eattooless);

// 4.
console.log(`${eattoomuch.join(" and ")}'s dog eat too much`);
console.log(`${eattooless.join(" and ")}'s dog eat too less`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recfood));

// 6.
const checkEating = (dog) =>
  dog.curFood > dog.recfood * 0.9 && dog.curFood < dog.recfood * 1.1;
console.log(dogs.some(checkEating));

// 7.
const eatOkDogs = dogs.filter(checkEating);
console.log(eatOkDogs);

// 8.
const dogsCopy = dogs.map((map) => map).sort((a, b) => a.recfood - b.recfood);
console.log(dogsCopy);

// ------------------------------------FINALLY WORKING WITH ARRAYS ARE COMPLETED!---------------------------------------------