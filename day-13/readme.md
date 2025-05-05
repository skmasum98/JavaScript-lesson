## 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations

<table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Value of <code>this</code></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. At the Global</td>
            <td><code>window</code> (in the browser) or <code>global</code> (in Node.js)</td>
          </tr>
          <tr>
            <td>2. Inside an Object Method</td>
            <td>The object itself</td>
          </tr>
          <tr>
            <td>3. Inside a Standalone Non-Arrow Function</td>
            <td><code>window</code> (in the browser) or <code>global</code> (in Node.js)</td>
          </tr>
          <tr>
            <td>4. Inside an Arrow Function (Standalone)</td>
            <td>Lexical <code>this</code> (from the surrounding context)</td>
          </tr>
          <tr>
            <td>5. Inside an Arrow Function (as Object Method)</td>
            <td>Lexical <code>this</code> (from the surrounding context)</td>
          </tr>
          <tr>
            <td>6. Inside an Object Created with Constructor Function</td>
            <td>The object created by the constructor</td>
          </tr>
        </tbody>
</table>

#### Example for Global Scope
        console.log(this); 
        // In the global scope, 'this' refers to the global object (window in browsers, global in Node.js).
        // In strict mode, 'this' will be undefined in the global scope.

#### Example for Object Method
        const obj = {
        name: "John",
        greet: function () {
            console.log(this.name); // In an object method, 'this' refers to the object itself.
        },
        };
        obj.greet(); // Output: John

#### Example for Standalone Non-Arrow Function
        function standaloneFunction() {
        console.log(this); // In a standalone non-arrow function, 'this' refers to the global object (window in browsers, global in Node.js).
        }
        standaloneFunction(); 
        // Output: global object (window in browsers, global in Node.js)

#### Example for Arrow Function (Standalone)
        const arrowFunction = () => {
        console.log(this); // In an arrow function, 'this' lexically binds to the surrounding context, which is the global object in this case.
        };
        arrowFunction(); // Output: global object (window in browsers, global in Node.js)

#### Example for Arrow Function (as Object Method)
        const objWithArrow = {
        name: "Jane",
        greet: () => {
            console.log(this.name); // In an arrow function as an object method, 'this' does not refer to the object itself but to the surrounding context (global object).
        },
        };
        objWithArrow.greet(); 
        // Output: undefined (or global object property if it exists)

#### Example for Object Created with Constructor Function
        function Person(name) {
        this.name = name;
        this.greet = function () {
            console.log(this.name); // In a constructor function, 'this' refers to the instance of the object created by the constructor.
        };
        }
        const person1 = new Person("Alice");
        person1.greet();
        // Output: Alice


## 2. What is the problem here? Fix it to log the correct name and explain the fix

        const user = {
            name: "tapaScript",
            greet: () => {
            console.log(`Hello, ${this.name}!`);
            },
        };
        
        user.greet();

 The problem here is that the arrow function does not have its own 'this' context. 
 Instead, it lexically binds 'this' to the surrounding context, which is not the user object. 
 As a result, 'this.name' is undefined.

 To fix this, we can change the arrow function to a regular function, which will bind 'this' to the user object.

        const fixUser = {
            name: "tapaScript",
            greet: function () {
            console.log(`Hello, ${this.name}!`);
            },
        };
            
        fixUser.greet();
        // Hello, tapaScript!


## 3. Can you explain what is the problem here and fix the issue to log the correct name?
        const obj = {
        name: "Tom",
        greet: function () {
            console.log(`Hello, ${this.name}!`);
        },
        };

        const greetFn = obj.greet;
        greetFn(); 
        
        //Hello, !

 The problem here is that when we assign obj.greet to greetFn, we lose the context of 'this'.
 When we call greetFn(), 'this' no longer refers to the obj object, but to the global object (or undefined in strict mode).
 As a result, 'this.name' is undefined.


 To fix this, we can use the bind() method to bind the correct context to greetFn.

        const fixedObj = {
            name: "Tom",
            greet: function () {
            console.log(`Hello, ${this.name}!`);
            },
        };
        
        const fixedGreetFn = fixedObj.greet.bind(fixedObj);
        fixedGreetFn(); // Output: Hello, Tom!



##   4. What is the problem with the following code? Why isn't it logging the name correctly?
            const user = {
            name: "Alex",
            greet: function () {
                function inner() {
                console.log(`Hello, ${this.name}!`);
                }
                inner();
            },
            };

            user.greet(); //Output: Hello, !


The problem here is that the inner function does not have its own 'this' context.
 When we call inner(), 'this' refers to the global object (or undefined in strict mode), not the user object.
 As a result, 'this.name' is undefined.


To fix this, we can use an arrow function for inner(), which will lexically bind 'this' to the surrounding context (the user object).

        const fixUserser = {
            name: "Alex",
            greet: function () {
                const inner = () => {
                    console.log(`Hello, ${this.name}!`);
                }
                inner();
            },
        };

        fixUserser.greet(); // Output: Hello, Alex!


## 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

        function Sports(name, numberOfPlayers) {
            this.name = name;
            this.numberOfPlayers = numberOfPlayers;
        }

        const football = new Sports("Football", 11);
        console.log(football); // Output: Sports { name: 'Football', numberOfPlayers: 11 }
        console.log(football.name); // Output: Football

        const basketball = new Sports("Basketball", 5);
        console.log(basketball); // Output: Sports { name: 'Basketball', numberOfPlayers: 5 }
        console.log(basketball.name); // Output: Basketball



## 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
        const car1 = {
        brand: "Audi",
        model: "A8",
        describe: function () {
            console.log(`This car is a ${this.brand} ${this.model}.`);
        },
        };

        const car2 = {
        brand: "BMW",
        model: "X1",
        };
        car1.describe(); // Output: This car is a Audi A8.

Solution 1: Using call()

        car1.describe.call(car2); // Output: This car is a BMW X1.

Solution 2: Using apply()

        car1.describe.apply(car2); // Output: This car is a BMW X1.

Solution 3: Using bind()

        const describeCar2 = car1.describe.bind(car2);
        describeCar2(); // Output: This car is a BMW X1.

Solution 4: Assigning the method directly

        car2.describe = car1.describe;
        car2.describe(); // Output: This car is a BMW X1.



## 7. What will be the output of the following code and why?

        const person = {
        name: "Charlie",
        sayHello: function () {
            console.log(this.name);
        },
        sayHelloArrow: () => {
            console.log(this.name);
        },
        };

        person.sayHello();
        // Output: "Charlie" (this refers to the person object)
        person.sayHelloArrow();
        // Output: undefined (this refers to the global object, not the person object)


 Options are:


         B: "Charlie" and undefined


