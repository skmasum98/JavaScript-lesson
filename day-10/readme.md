## 1. What will be the output of the following code and why?

        let user = "Alice";

        function outer() {
            function inner() {
                console.log(user);
            }
            let user = "Bob";
            inner();
        }

        outer(); // output is Bob, 

 lets check flow 
        outer() > ep function (outer) > find variable - user = "Bob"; > inner() > no ep > cp: user (user already define "Bob")



## 2. What is the mistake in the code below?

            let total = 0; // Global, bad practice

            function add(num) { // if we want to assign a value of num it should like (num = 0)
                total += num;
            }

            add(5);
            add(10);
            console.log(total);

 if we want to assign a value of num it should like (num = 0)


## 3. Create a function with a nested function and log a variable from the parent function.
        function outerFunction() {
            let outerVariable = "I am from the outer function";

            function innerFunction() {
                console.log(outerVariable);
            }

            innerFunction();
        }

        outerFunction(); 

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

        function loopFunction() {
            for (let i = 1; i < 5; i++) {
                let loopVariable = "I am inside the loop";
                console.log(loopVariable);
            }
            //  console.log(loopVariable); // This will throw an error because loopVariable is not defined outside the loop
        }
        loopFunction();

        console.log(loopVariable)// // This will throw an error because loopVariable is not defined outside the loop

//Can you access it outside?
// No, you cannot access loopVariable outside the loop because it is declared with let, which has block scope.
// If you declare it with var, it will be hoisted to the function scope, but it's still not accessible outside the function.    


## 5. Write a function that tries to access a variable declared inside another function.

        function outerFunction() {
            let outerVariable = "I am from the outer function";
            function innerFunction() {
                let innerVariable = "I am from the inner function";
                console.log(innerVariable); // This will work because innerVariable is in the same scope
                console.log(outerVariable); // This will work because innerFunction is inside outerFunction
            }
            innerFunction();
            // console.log(innerVariable); // This will throw an error because innerVariable is not defined outside the inner function
            // console.log(outerVariable); // This will work because outerVariable is in the same scope
            // return outerVariable; // This will work because outerVariable is in the same scope
        }

        outerFunction(); // This will work because outerVariable is in the same scope
        // console.log(innerVariable); // This will throw an error because innerVariable is not defined outside the inner function
        // console.log(outerVariable); // This will throw an error because outerVariable is not defined outside the function



## 6. What will be the output and why?

        console.log(a); 
        let a = 10; // a declared in TDZ


// Uncaught ReferenceError: Cannot access 'a' before initialization



## 7. Where is the `age` variable accessible?

    function showAge() {
        let age = 25;
        console.log(age);
    }

    console.log(age);

The variable age is only accessible inside the showAge() function block.

Options:
- A: In Global
- <b>B: Only inside showAge></b>
- C: It will cause an error
- D: None of the above

## 8. What will be the output and explain the output?

        let message = "Hello";

        function outer() {
            let message = "Hi";

            function inner() {
                console.log(message);
            }

            inner();
        }

        outer();

output is : Hi
"it don't find outside the function if inside have a variable"


## 9. What will be the output and why?
```js
        let x = "Global";

        function outer() {
            let x = "Outer";

            function inner() {
                let x = "Inner";
                console.log(x);
            }

            inner();
        }

        outer();
```
<b>"When code executes, it finds the nearest variable"</b>

## 10. What will be the output and why?

        function counter() {
            let count = 0;
            return function () {
                count--;
                console.log(count);
            };
        }

        const reduce = counter();
        reduce();
        reduce();

answer 

        -1
        -2

why?
Because the inner function forms a closure over the count variable from the counter() function, and each call to reduce() modifies the same count