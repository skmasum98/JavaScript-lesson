console.log("40 days of JavaScript - Day 15 Tasks");

// 1. Create an array of 5 elements using the Array Constructor.    
//    The Array constructor is a built-in JavaScript function that creates an array object.
//    It can be used to create an array of a specified length or to create an array with specific elements.
//    The Array constructor can be called with or without the new keyword.
//    When called with the new keyword, it creates a new array object.
//    When called without the new keyword, it creates a new array object and returns it.
//    The Array constructor can also be called with a single argument, which is the length of the array.
//    If the length is a positive integer, it creates an array with that many empty slots.
//    If the length is a negative integer, it creates an array with that many empty slots.
//    If the length is not a number, it creates an array with that many empty slots.
//    If the length is a number, it creates an array with that many empty slots.


const myArray = new Array("a", "b", "c", "d", "e"); // Creates an array with 5 elements
console.log(myArray); // [ "a", "b", "c", "d", "e" ]

// **T-002**: Create an array of 3 empty slots.

const emptyArray = new Array(3); // Creates an array with 3 empty slots
console.log(emptyArray); // [ <empty>, <empty>, <empty> ]

//  **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.

const literalsArray = ["a", "b", "c", "d", "e", "f"];
console.log(literalsArray[3]); // d

//  **T-004**: Use the `for` loop on the above array to print elements in the odd index.
for (let i = 0; i < literalsArray.length; i++) {
    if (i % 2 !== 0) {
        console.log(literalsArray[i]);
    }
} // Prints elements in odd index b, d, f

//  **T-005**: Add one element at the front and the end of an array.

literalsArray.unshift("x"); // front
literalsArray.push("y"); // end
console.log(literalsArray); // [ "x", "a", "b", "c", "d", "e", "f", "y" ]
//  **T-006**: Remove an element from the front and the end of an array.

literalsArray.shift(); // front
literalsArray.pop(); // end
console.log(literalsArray); // [ "a", "b", "c", "d", "e", "f" ]

 
//  **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

const foods = ["Pizza", "Burger", "Pasta", "Salad", "Sushi", "Tacos", "Ice Cream", "Chocolate", "Cookies", "Brownies"];
const [,, , , , sixthFood] = foods;
console.log(sixthFood); // Tacos
console.log(foods); // [ "Pizza", "Burger", "Pasta", "Salad", "Sushi", "Tacos", "Ice Cream", "Chocolate", "Cookies", "Brownies" ]


//  **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [firstFood, secondFood, ...restFoods] = foods;

console.log(...restFoods); // [ "Pasta", "Salad", "Sushi", "Tacos", "Ice Cream", "Chocolate", "Cookies", "Brownies" ]

//  **T-009**: Clone an Array(Shallow cloning)

const clonedArray = [...foods];
console.log(clonedArray); // [ "Pizza", "Burger", "Pasta", "Salad", "Sushi", "Tacos", "Ice Cream", "Chocolate", "Cookies", "Brownies" ]


//  **T-010**: Empty an array using its length property
console.log('**T-010**: Empty an array using its length property')

const emptyArray2 = [...foods];
emptyArray2.length = 0; // Empty the array
console.log(emptyArray2); // []


//  **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
console.log("**T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.");

const numbers = new Array (10)
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1; // Fill the array with numbers 1 to 10
}

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        numbers.length = 6; // Resize the array to length 6
        break;
    }
}
console.log(numbers); // [1, 2, 3, 4, 5, 6]


//  **T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.
console.log("**T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.");

const fruits = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🍍', '🥭', '🍑', '🍊'];

fruits.splice(0, fruits.length); // Empty the array using splice
console.log(fruits); // []



//  **T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` 
// property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, 
// or the `splice()` method. Which among these methods are most efficient and why?
console.log("**T-013**:");

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Using length property
numbers2.length = 0; // Empty the array using length property
console.log(numbers2); // []
// 2. Using pop() method
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (numbers3.length > 0) {
    numbers3.pop(); // Remove the last element
}
console.log(numbers3); // []
// 3. Using shift() method
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (numbers4.length > 0) {
    numbers4.shift(); // Remove the first element
}
console.log(numbers4); // []
// 4. Setting the array with []
// const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers5 = []; // Empty the array by reassigning it to an empty array
// console.log(numbers5); // []
// Note: This will throw an error because numbers5 is a constant variable.


// 5. Using splice() method
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers6.splice(0, numbers6.length); // Empty the array using splice
console.log(numbers6); // []
// 6. Using Array.prototype.length = 0 is the most efficient way to empty an array because it directly modifies the length property of the array.


//  **T-014**: What happens when you concatenate two empty arrays?
console.log("**T-014**: What happens when you concatenate two empty arrays?");

const arr1 = [];
const arr2 = [];
const result = arr1.concat(arr2);

console.log(result);



//  **T-015**: How can you check if a value is partially matching with any of the elements of an Array?
console.log("**T-015**: ");

const array = ["apple", "banana", "cherry", "date"];
const searchValue = "an";

const matching = array.filter(item => item.includes(searchValue));

console.log(matching);



//  **T-016**: What is the difference between the slice() and splice() methods?
//  **T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
//  **T-018**: Can you give examples of sparse and dense arrays?
//  **T-019**: Give a practical usages of the .fill() method
//  **T-020**: How to convert an array to a string?

// > Consider these input arrays for question **T-21** to **T-48**

// - `employees array`: An array of emplyees working in a department.

//   ```js
//   const employees = [
//     { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
//     { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
//     { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
//     { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
//     { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
//     { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
//     { id: 7, name: "George", departmentId: 3, salary: 5200 },
//     { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
//     { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
//     { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
//   ];
//   ```

// - `departments array`: An array of departments where emplyees work.

//   ```js
//   const departments = [
//     { id: 1, name: "HR" },
//     { id: 2, name: "Engineering" },
//     { id: 3, name: "Marketing" },
//     { id: 4, name: "Sales" },
//   ];
//   ```

//  **T-021**: Can you filter employees who work in the "Engineering" department?
//  **T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".
//  **T-023**: Find the highest salary among employees.
//  **T-024**: Check if there is at least one employee in the "Sales" department.
//  **T-025**: Write a function to filter employees earning more than 6000.
//  **T-026**: Create an array of employee names only.
//  **T-027**: Calculate the total salary of all employees using
//  **T-028**: Is there any employee earning less than 5000?
//  **T-029**: Find the first employee who earns exactly 5100.
//  **T-030**: Find the last employee in the "HR" department.
//  **T-031**: Find the first employee in the "Marketing" department.
//  **T-032**: Check if all employees earn more than 4000.
//  **T-033**: Find the first employee in the "Sales" and "HR" department.
//  **T-034**: Verify if all employees belong to a department listed in the departments array.
//  **T-035**: Log each employee's name and department name to the console.
//  **T-036**: Extract all employee names into a single array.
//  **T-037**: Increment each employee's salary by 10%
//  **T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
//  **T-039**: Find the total salary of all employees working in the "Engineering" department.

const engineeringTotalSalary = employees.filter(employee => employee.departmentId === 2)
    return engineeringTotalSalary.reduce((acc, employee) => acc + employee.salary, 0);

console.log(engineeringTotalSalary);



//  **T-040**: Check if there is any department where all employees earn more than 5000.
//  **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
// Find the total number of unique projects being handled across all employees.
//  **T-042**: For each employee, find their department name and return an array of employee names with their department names.
//  **T-043**: Get a list of names of employees earning more than 6000.
//  **T-044**: Write a for-of loop to print the names of all employees from the employees array.
//  **T-045**: Using a for-of loop, print the names of employees earning more than 5000.
//  **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.
//  **T-047**: Write a for-of loop to match employees with their departments and print the results.
//  **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

//  **T-049**: Given the array-like object below, access the second element and log it:

//   ```js
//   const arrayLike = { 0: "First", 1: "Second", length: 2 };
//   ```

//  **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
//  **T-051**: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
//  **T-052**: Merge these two arrays into a single array:

//   ```js
//   const arr1 = [1, 2];
//   const arr2 = [3, 4];
//   ```

//  **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
//  **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.
//  **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
//  **T-057**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
//  **T-058**: Find the median of [5, 2, 9, 1, 3, 6, 8].
//  **T-059**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
//  **T-060**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].
//  **T-061**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
//  **T-062**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
//  **T-063**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
//  **T-064**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
//  **T-065**: Group the follwing array elements based on age(Adult vs Non-Adult):

// ```js
// const users = [
//   { name: 'Alice', age: 55 },
//   { name: 'Bob', age: 3 },
//   { name: 'Charlie', age: 25 },
// ];
// ```

//  **T-066**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
//  **T-067**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]