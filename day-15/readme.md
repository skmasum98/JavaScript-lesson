## Questions


### **T-001**: Create an array of 5 elements using the Array Constructor.
```
const myArray = new Array("a", "b", "c", "d", "e"); // Creates an array with 5 elements
console.log(myArray); // [ "a", "b", "c", "d", "e" ]
```
---
### **T-002**: Create an array of 3 empty slots.
```
const emptyArray = new Array(3); // Creates an array with 3 empty slots
console.log(emptyArray); // [ <empty>, <empty>, <empty> ]
```
---

### **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.

```
const literalsArray = new Array("a", "b", "c", "d", "e", "f"); 
console.log(literalsArray[3]); // d
```
---

### **T-004**: Use the `for` loop on the above array to print elements in the odd index.

```
const literalsArray = new Array("a", "b", "c", "d", "e", "f");

for (let i = 0; i < literalsArray.length; i++) {
    if (i % 2 !== 0) {
        console.log(literalsArray[i]);
    }
} // Prints elements in odd index b, d, f
```
---

### **T-005**: Add one element at the front and the end of an array.

```
literalsArray.unshift("x"); // front
literalsArray.push("y"); // end
console.log(literalsArray); // [ "x", "a", "b", "c", "d", "e", "f", "y" ]
```
---

### **T-006**: Remove an element from the front and the end of an array.

```
literalsArray.shift(); // front
literalsArray.pop(); // end
console.log(literalsArray); // [ "a", "b", "c", "d", "e", "f" ]
```
---

### **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

```
const foods = ["Pizza", "Burger", "Pasta", "Salad", "Sushi", "Tacos", "Ice Cream", "Chocolate", "Cookies", "Brownies"];
const [,, , , , sixthFood] = foods;
console.log(sixthFood); // Tacos
console.log(foods); 

// [ "Pizza", "Burger", "Pasta", "Salad", "Sushi", "Tacos", "Ice Cream", "Chocolate", "Cookies", "Brownies" ]
```




### **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
    const [firstFood, secondFood, ...restFoods] = foods;

    console.log(...restFoods); // [ "Pasta", "Salad", "Sushi", "Tacos", "Ice Cream", "Chocolate", "Cookies", "Brownies" ]

###  **T-009**: Clone an Array(Shallow cloning)

    const clonedArray = [...foods];
    console.log(clonedArray); // [ "Pizza", "Burger", "Pasta", "Salad", "Sushi", "Tacos", "Ice Cream", "Chocolate", "Cookies", "Brownies" ]


###  **T-010**: Empty an array using its length property

    const emptyArray2 = [...foods];
    emptyArray2.length = 0; // Empty the array
    console.log(emptyArray2); // []


###  **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
```
      const numbers = new Array (10)
      for (let i = 0; i < numbers.length; i++) {
          numbers[i] = i + 1; // Fill the array with numbers 1 to 10
      }

      console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] === 5) {
              numbers.length = 6; // Resize the array to length 6
              break;
          }
      }
      console.log(numbers); // [1, 2, 3, 4, 5, 6]
```

### **T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.
```
const fruits = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🍍', '🥭', '🍑', '🍊'];

fruits.splice(0, fruits.length); // Empty the array using splice
console.log(fruits); // []
```


### **T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length`  property, using the `pop()` method, using the `shift()` method, setting the array with `[]`,  or the `splice()` method. Which among these methods are most efficient and why?

```
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
```

**Using Array.prototype.length = 0 is the most efficient way to empty an array because it directly modifies the length property of the array.**


###  **T-014**: What happens when you concatenate two empty arrays?
```
const arr1 = [];
const arr2 = [];
const result = arr1.concat(arr2);

console.log(result);
```


###  **T-015**: How can you check if a value is partially matching with any of the elements of an Array?

```
const array = ["apple", "banana", "cherry", "date"];
const searchValue = "an";

const matching = array.filter(item => item.includes(searchValue));

console.log(matching);
```

### **T-016**: What is the difference between the slice() and splice() methods?

```
const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 4); // [2, 3, 4]

const splicedArray = array.splice(1, 2); // [2, 3]
console.log(slicedArray); // [2, 3, 4]
console.log(array); // [1, 4, 5]

```

The original array is modified by splice, but slice returns a new array without modifying the original.


### **T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

```
const alphanumericArray = ["a1", "b2", "c3", "d4", "e5"];
const sortedAscending = alphanumericArray.slice().sort(); // Ascending order
const sortedDescending = alphanumericArray.slice().sort().reverse(); // Descending order
console.log(sortedAscending); // [ "a1", "b2", "c3", "d4", "e5" ]
console.log(sortedDescending); // [ "e5", "d4", "c3", "b2", "a1" ]
```


### **T-018**: Can you give examples of sparse and dense arrays?

```
// Sparse Array
const sparseArray = [1, , 3, , 5]; // Contains empty slots
console.log(sparseArray); // [ 1, <1 empty item>, 3, <1 empty item>, 5 ]
// Dense Array
const denseArray = [1, 2, 3, 4, 5]; // No empty slots
console.log(denseArray); // [ 1, 2, 3, 4, 5 ]
```



### **T-019**: Give a practical usages of the .fill() method

```
const filledArray = new Array(5).fill(1); 
console.log(filledArray); // [ 1, 1, 1, 1, 1 ]

// Creates an array of length 5 filled with 1

const filledArray2 = new Array(5).fill(0).map((_, index) => index + 1); 
console.log(filledArray2); // [ 1, 2, 3, 4, 5 ]

// Creates an array of length 5 filled with numbers from 1 to 5
```





### **T-020**: How to convert an array to a string?

```js
// Using join() method  
const array = ["apple", "banana", "cherry"];
const string = array.join(", "); // Converts the array to a string
console.log(string); // "apple, banana, cherry"


// Using toString() method
const array2 = ["apple", "banana", "cherry"];
const string2 = array2.toString(); // Converts the array to a string
console.log(string2); // "apple,banana,cherry"


// Using JSON.stringify()
const array3 = ["apple", "banana", "cherry"];
const string3 = JSON.stringify(array3); // Converts the array to a JSON string
console.log(string3); // "["apple","banana","cherry"]"

// Using String() constructor
const array4 = ["apple", "banana", "cherry"];
const string4 = String(array4); // Converts the array to a string
console.log(string4); // "apple,banana,cherry"
```


> Consider these input arrays for question **T-21** to **T-48**

- `employees array`: An array of emplyees working in a department.

  ```js
  const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
  ];
  ```

- `departments array`: An array of departments where emplyees work.

  ```js
  const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
  ];
  ```

### **T-021**: Can you filter employees who work in the "Engineering" department?

```js
const engineeringEmployees = employees.filter(employee => employee.departmentId === 2);
console.log(engineeringEmployees); 
```
 [{ id: 2, name: "Bob", departmentId: 2, salary: 7000 }, { id: 5, name: "Edward", departmentId: 2, salary: 8000 }, { id: 9, name: "Ian", departmentId: 2, salary: 4800 }]



### **T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".
```js
const combinedArray = employees.map(employee => {
    const department = departments.find(dept => dept.id === employee.departmentId);
    return `${employee.name} (${department.name})`;
});
console.log(combinedArray); 
```
["Alice (HR)", "Bob (Engineering)", "Charlie (Marketing)", "Diana (HR)", "Edward (Engineering)", "Fiona (Sales)", "George (Marketing)", "Helen (Sales)", "Ian (Engineering)", "Jane (HR)"]  


### **T-023**: Find the highest salary among employees.

```js
const highestSalary = Math.max(...employees.map(employee => employee.salary));
console.log(highestSalary); // 8000
```


### **T-024**: Check if there is at least one employee in the "Sales" department.

```js
const hasSalesEmployee = employees.some(employee => employee.departmentId === 4);
console.log(hasSalesEmployee); // true
```




### **T-025**: Write a function to filter employees earning more than 6000.

```js
const highSalaryEmployees = employees.filter(employee => employee.salary > 6000);
console.log(highSalaryEmployees); 
```
[{ id: 2, name: "Bob", departmentId: 2, salary: 7000 }, { id: 5, name: "Edward", departmentId: 2, salary: 8000 }, { id: 8, name: "Helen", departmentId: 4, salary: 7200 }]


### **T-026**: Create an array of employee names only.

```js
const employeeNames = employees.map(employee => employee.name);
console.log(employeeNames); 
```
["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Helen", "Ian", "Jane"]



### **T-027**: Calculate the total salary of all employees using

```js
const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log(totalSalary); 
```

5000 + 7000 + 4500 + 5500 + 8000 + 6000 + 5200 + 7200 + 4800 + 5100 =  50000




### **T-028**: Is there any employee earning less than 5000?

```js
const hasLowSalaryEmployee = employees.some(employee => employee.salary < 5000);
console.log(hasLowSalaryEmployee); // true
```


### **T-029**: Find the first employee who earns exactly 5100.

```js
const firstEmployeeWithSalary5100 = employees.find(employee => employee.salary === 5100);
console.log(firstEmployeeWithSalary5100); 
```
{ id: 10, name: "Jane", departmentId: 1, salary: 5100 }




### **T-030**: Find the last employee in the "HR" department.

```js
//findLast() medthod 
const lastHREmployee = employees.findLast(employee => employee.departmentId === 1);
console.log(lastHREmployee); 
```
{ id: 10, name: "Jane", departmentId: 1, salary: 5100 }



### **T-031**: Find the first employee in the "Marketing" department.

```js
const firstMarketingEmployee = employees.find(employee => employee.departmentId === 3);
console.log(firstMarketingEmployee); 
```
{ id: 3, name: "Charlie", departmentId: 3, salary: 4500 }



### **T-032**: Check if all employees earn more than 4000.

```js
const allEmployeesEarnMoreThan4000 = employees.every(employee => employee.salary > 4000);
console.log(allEmployeesEarnMoreThan4000); // true
```



### **T-033**: Find the first employee in the "Sales" and "HR" department.

```js
const firstSalesOrHREmployee = employees.find(employee => employee.departmentId === 4 || employee.departmentId === 1);
console.log(firstSalesOrHREmployee); 
```
{ id: 1, name: "Alice", departmentId: 1, salary: 5000 }


### **T-034**: Verify if all employees belong to a department listed in the departments array.

```js
const allEmployeesInDepartments = employees.every(employee => departments.some(department => department.id === employee.departmentId));
console.log(allEmployeesInDepartments); // true
```

### **T-035**: Log each employee's name and department name to the console.

```js
employees.forEach(employee => {
    const department = departments.find(dept => dept.id === employee.departmentId);
    console.log(`${employee.name} works in ${department.name}`);
});
```
// Alice works in HR
// Bob works in Engineering
// Charlie works in Marketing
// Diana works in HR
// Edward works in Engineering
// Fiona works in Sales
// George works in Marketing
// Helen works in Sales
// Ian works in Engineering
// Jane works in HR

### **T-036**: Extract all employee names into a single array.

```js
const allEmployeeNames = employees.map(employee => employee.name);
console.log(allEmployeeNames); 
```
["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Helen", "Ian", "Jane"]


### **T-037**: Increment each employee's salary by 10%

```js
const updatedSalaries = employees.map(employee => ({
    ...employee,
    salary: employee.salary * 1.1
}));
console.log(updatedSalaries); 
```
Output:

```js
[{ id: 1, name: "Alice", departmentId: 1, salary: 5500 }, 
{ id: 2, name: "Bob", departmentId: 2, salary: 7700 }, 
{ id: 3, name: "Charlie", departmentId: 3, salary: 4950 }, 
{ id: 4, name: "Diana", departmentId: 1, salary: 6050 }, 
{ id: 5, name: "Edward", departmentId: 2, salary: 8800 }, 
{ id: 6, name: "Fiona", departmentId: 4, salary: 6600 }, 
{ id: 7, name: "George", departmentId: 3, salary: 5720 }, 
{ id: 8, name: "Helen", departmentId: 4, salary: 7920 }, 
{ id: 9, name: "Ian", departmentId: 2, salary: 5280 }, 
{ id: 10, name: "Jane", departmentId: 1, salary: 5610 }]
```


### **T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

```js
const employeesWithSkills = [
    { name: "Alice", skills: ["Excel", "Management"] },
    { name: "Bob", skills: ["JavaScript", "React"] },
    { name: "Charlie", skills: ["Marketing", "Sales"] },
];
const allSkills = employeesWithSkills.flatMap(employee => employee.skills);
console.log(allSkills); 
```
["Excel", "Management", "JavaScript", "React", "Marketing", "Sales"]



### **T-039**: Find the total salary of all employees working in the "Engineering" department.

```js
const engineeringTotalSalary = employees
    .filter(employee => employee.departmentId === 2)
    .reduce((acc, employee) => acc + employee.salary, 0);

console.log(engineeringTotalSalary); // 19800
```
// Bob: 7000, Edward: 8000, Ian: 4800 = 19800

it used filter() to get the employees in the Engineering department and then used reduce() to calculate the total salary.
    

### **T-040**: Check if there is any department where all employees earn more than 5000.

- This task requires checking if all employees in a department earn more than 5000. You can use the `every()` method to achieve this.

```js
const allDepartments = departments.map(department => {
    const employeesInDepartment = employees.filter(employee => employee.departmentId === department.id);
    const allEarnMoreThan5000 = employeesInDepartment.every(employee => employee.salary > 5000);
    return {
        departmentName: department.name,
        allEarnMoreThan5000: allEarnMoreThan5000
    };
});
console.log(allDepartments); 
// [{ departmentName: "HR", allEarnMoreThan5000: true }, 
// { departmentName: "Engineering", allEarnMoreThan5000: false }, 
// { departmentName: "Marketing", allEarnMoreThan5000: false }, 
// { departmentName: "Sales", allEarnMoreThan5000: true }]
```




### **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
Find the total number of unique projects being handled across all employees.

```js
    //step 1 : push all projects into a single array and then use Set to get unique values
    // step 2 : use the length property to get the number of unique projects
    // step 3 : use the spread operator to convert the Set back to an array

const employeesWithProjects = [
    { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
    { id: 2, name: "Bob", projects: ["Project C"] },
    { id: 3, name: "Charlie", projects: ["Project A", "Project D"] },
    { id: 4, name: "Diana", projects: ["Project E"] },
    { id: 5, name: "Edward", projects: ["Project F", "Project G"] },
    { id: 6, name: "Fiona", projects: ["Project H"] },
    { id: 7, name: "George", projects: ["Project I", "Project J"] },
    { id: 8, name: "Helen", projects: ["Project K"] },
    { id: 9, name: "Ian", projects: ["Project L"] },
    { id: 10, name: "Jane", projects: ["Project M"] },
    ];

const allProjects = employeesWithProjects.flatMap(emp => emp.projects);
const uniqueProjects = [...new Set(allProjects)];


console.log("Total Unique Projects:", uniqueProjects.length);
console.log("Projects List:", uniqueProjects);

```
- Total Unique Projects: 13
- Projects List: (13) ['Project A', 'Project B', 'Project C', 'Project D', 'Project E', 'Project F', 'Project G', 'Project H', 'Project I', 'Project J', 'Project K', 'Project L', 'Project M']

### **T-042**: For each employee, find their department name and return an array of employee names with their department names.

```js
// plan . use map() to iterate over employees and find their department names
const employeeDepartments = employees.map(employee => {
    const department = departments.find(dept => dept.id === employee.departmentId);
    return {
        name: employee.name,
        department: department ? department.name : "Unknown"
    };
});

console.log(employeeDepartments);
```

```js
[
   { name: "Alice", department: "HR" },
   { name: "Bob", department: "Engineering" },
   { name: "Charlie", department: "Marketing" },
   { name: "Diana", department: "Sales" },
   { name: "Edward", department: "Engineering" },
   { name: "Fiona", department: "Marketing" },
   { name: "George", department: "Sales" },
   { name: "Helen", department: "HR" },
   { name: "Ian", department: "Engineering" },
   { name: "Jane", department: "Marketing" },
 ]
```
### **T-043**: Get a list of names of employees earning more than 6000.
```js

const highEarningEmployees = employees.filter(employee => employee.salary >= 6000).map(employee => employee.name);
console.log(highEarningEmployees); 
```
[ 'Bob', 'Edward', 'Fiona', 'Helen' ]



### **T-044**: Write a for-of loop to print the names of all employees from the employees array.

```js

for (const employee of employees) {
    console.log(employee.name);
}
```
- Alice
- Bob
- Charlie
- Diana
- Edward
- Fiona
- George
- Helen
- Ian
- Jane

### **T-045**: Using a for-of loop, print the names of employees earning more than 5000.
```js
for (const employee of employees) {
    if (employee.salary > 5000) {
        console.log(employee.name);
    }
}
```

### **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.
```js
for (const employee of employees) {
    const { name, salary } = employee;
    console.log(`Name: ${name}, Salary: ${salary}`);
}
```

### **T-047**: Write a for-of loop to match employees with their departments and print the results.
```js
for (const employee of employees) {
    const department = departments.find(dept => dept.id === employee.departmentId);
    console.log(`Employee: ${employee.name}, Department: ${department ? department.name : "Unknown"}`);
}

// Employee: Alice, Department: HR
// Employee: Bob, Department: Engineering
// Employee: Charlie, Department: Marketing
// Employee: Diana, Department: HR
// Employee: Edward, Department: Engineering
// Employee: Fiona, Department: Sales
// Employee: George, Department: Marketing
// Employee: Helen, Department: Sales
// Employee: Ian, Department: Engineering
// Employee: Jane, Department: HR

```

### **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
```js
for (const [index, employee] of employees.entries()) {
    console.log(`Index: ${index}, Employee: ${employee.name}`);
}

```
- Index: 0, Employee: Alice
- Index: 1, Employee: Bob
- Index: 2, Employee: Charlie
- Index: 3, Employee: Diana
- Index: 4, Employee: Edward
- Index: 5, Employee: Fiona
- Index: 6, Employee: George
- Index: 7, Employee: Helen
- Index: 8, Employee: Ian
- Index: 9, Employee: Jane


### **T-049**: Given the array-like object below, access the second element and log it:

  ```js
    const arrayLike = { 0: "First", 1: "Second", length: 2 };
    console.log(arrayLike[1]); // Second
  ```
  - Second

### **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

```js

function convertArgumentsToArray() {
    return Array.from(arguments);
}
const argsArray = convertArgumentsToArray(1, 2, 3, 4, 5);
console.log(argsArray); // [1, 2, 3, 4, 5]
```




### **T-051**: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

```js
const divElements = document.querySelectorAll("div");
const divArray = Array.from(divElements);
console.log(divArray);
```

- Answer to Question 51
- index.js:352
- Array(1)
- 0: div#main
- length: 1
### **T-052**: Merge these two arrays into a single array:

  ```js
  const arr01 = [1, 2];
  const arr02 = [3, 4];
    const mergedArray = arr01.concat(arr02);
    console.log(mergedArray); // [1, 2, 3, 4]
  ```

### **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

```js
const n = 5;
const duplicateArray = Array.from({ length: n }, () => "A");
console.log(duplicateArray); // ["A", "A", "A", "A", "A"]
```
### **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.
```js
const str = "Hello";
const charArray = Array.from(str);
console.log(charArray); // ["H", "e", "l", "l", "o"]
```

### **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

```js
const fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
const groupedFruits = fruits.group(fruit => fruit[0]);
console.log(groupedFruits); 
```
// Output:
```js
{
  a: ['apple', 'apricot'],
  b: ['banana', 'blueberry'],
  m: ['mango']
}
```
### **T-057**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

```js
const numbers = [3, 7, 3, 2, 3, 8, 7, 7];
const mostRepeated = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
const mostRepeatedNumber = Object.keys(mostRepeated).reduce((a, b) => mostRepeated[a] > mostRepeated[b] ? a : b);
console.log(mostRepeatedNumber); // 3
```

### **T-058**: Find the median of [5, 2, 9, 1, 3, 6, 8].

```js
const numbers = [5, 2, 9, 1, 3, 6, 8];
const sortedNumbers = numbers.sort((a, b) => a - b);
const mid = Math.floor(sortedNumbers.length / 2);
const median = sortedNumbers.length % 2 !== 0 ? sortedNumbers[mid] : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
console.log(median); // 5
```

### **T-059**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
```js
const array = [['a', 1], ['b', 2], ['c', 3]];
const object = Object.fromEntries(array);
console.log(object); // { a: 1, b: 2, c: 3 }
```


### **T-060**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

```js
const array = [['a', 'b'], ['c', 'd']];
const flattenedUppercase = array.flatMap(subArray => subArray.map(letter => letter.toUpperCase()));
console.log(flattenedUppercase); // ['A', 'B', 'C', 'D']
```

### **T-061**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
```js
const fruits = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount); // { apple: 2, banana: 4, mango: 1 }
```

### **T-062**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
```js
const array = ['a', 'b', 'c', 'd', 'e'];
const slicedArray = array.slice(1, 4);
console.log(slicedArray); // ['b', 'c', 'd']
```

### **T-063**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
```js
const array = [9, 3, 1, 6, 8];
const sortedArray = array.toSorted((a, b) => a - b);
console.log(sortedArray); // [1, 3, 6, 8, 9]
```

### **T-064**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
```js
const array = [1, 2, 3, 4, 5];
const reversedArray = array.toReversed();
const originalArray = [...array].reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(originalArray); // [5, 4, 3, 2, 1]
```
- The `toReversed()` method returns a new array with the elements in reverse order, while `reverse()` modifies the original array in place. In this case, both methods produce the same output, but `toReversed()` does not change the original array.
### **T-065**: Group the follwing array elements based on age(Adult vs Non-Adult):

```js
const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];
const groupedUsers = users.group(user => (user.age >= 18 ? 'Adult' : 'Non-Adult'));
console.log(groupedUsers); 
```
```js
{
  Adult: [
    { name: 'Alice', age: 55 },
    { name: 'Charlie', age: 25 }
  ],
  Non-Adult: [
    { name: 'Bob', age: 3 }
  ]
}
```


### **T-066**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
```js
const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
const longestWord = sentence.split(' ').reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
}, '');
console.log(longestWord); // "JavaScript"
```
- The longest word in the sentence is "JavaScript".
### **T-067**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
```js
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const commonElements = array1.filter(value => array2.includes(value));
console.log(commonElements); // [3, 4]
```