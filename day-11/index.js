console.log("Day 11 - Closure");

function outer() {
  let count = 0;
  return function inner() {
      count++;
      console.log(count);
  };
}
const counter = outer();
counter();// 1 
counter();// 2

// it returns 1, 2. because the inner function has access to the outer function's scope, and the variable count is preserved between calls to the inner function.
// This is a simple example of closure in JavaScript, where the inner function retains access to the outer function's variables even after the outer function has finished executing.

// ## 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
      return x * x;
  };
}
console.log(testClosure()());

// The output will be 100.
// This is because the inner function retains access to the variable x from the outer function's scope, even after the outer function has executed.
// When the inner function is called, it returns the square of x, which is 10 * 10 = 100.



// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
const button = document.createElement('button');
button.innerText = 'Click me!';
document.body.appendChild(button);

function createClickCounter() {
  let count = 0;
  return function() {
      count++;
      console.log(`Button clicked ${count} times`);
  };
}

const clickCounter = createClickCounter();
button.addEventListener('click', clickCounter);


// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
  return function(number) {
      return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15


// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function createCounter() {
  let count = 0; // private variable

  return {
    increment: () => {
      count++;
      console.log(`Count after increment: ${count}`);
    },
    decrement: () => {
      count--;
      console.log(`Count after decrement: ${count}`);
    },
    reset: () => {
      count = 0;
      console.log(`Count after reset: ${count}`);
    },
    getCount: () => {
      return count;
    }
  };
}

const closureCounter = createCounter();
closureCounter.increment(); // Count after increment: 1
closureCounter.increment(); // Count after increment: 2
closureCounter.decrement(); // Count after decrement: 1
closureCounter.reset(); // Count after reset: 0
closureCounter.increment(); // Count after increment: 1