# Day 12 Task

## 1. What will be the output and why?

        const user = { name: "Alex", age: undefined };
        console.log(user.age ?? "Not provided");

// Not provided
// user.age is undefined, so the ?? operator will return the right-hand side value, which is "Not provided"

## 2. What will happen if we try to modify a frozen object?

        const obj = Object.freeze({ a: 1 });
        obj.a = 2;
        console.log(obj.a);

// The output will be 1, because the property a is frozen and cannot be changed.

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

        const person = {
        name: "Tapas",
        company: {
            name: "tapaScript",
            location: {
            city: "Bangalore",
            zip: "94107"
            }
        }
        };

        const { name, company: { name: companyName }, company: { location: { city } } } = person;
        console.log(name, companyName, city); // Tapas tapaScript Bangalore


## 4. Build a Student Management System
 Store student details in an object (name, age, grades).
 Implement a method to calculate the average grade.

        const student = {
        studentName: "John Doe",
        age: 20,
        grades: [85, 90, 78, 92],
        calculateAverage() {
            const total = this.grades.reduce((acc, grade) => acc + grade, 0);
            return total / this.grades.length;//
        }

        };


        let averageGrade = student.calculateAverage()
        const {studentName, age } = student;
        console.log(studentName, "age is "+ age + "Average Grade Mark " + averageGrade );

John Doe age is 20 Average Grade Mark 86.25

## 5. Book Store Inventory System
 Store books in an object.
 Add functionality to check availability and restock books.

      const bookStore = {
        books: {
          "The Great Gatsby": { available: 5, price: 10 },
          "1984": { available: 0, price: 15 },
          "To Kill a Mockingbird": { available: 3, price: 12 }
        },
        checkAvailability(bookName) {
          return this.books[bookName]?.available > 0 ? "Available" : "Out of stock";
        },
        restockBook(bookName, quantity) {
          if (this.books[bookName]) {
            this.books[bookName].available += quantity;
          } else {
            console.log("Book not found in inventory.");
          }
        }
      };

      console.log(bookStore.checkAvailability("1984")); // Out of stock
      bookStore.restockBook("1984", 10);
      console.log(bookStore.checkAvailability("1984")); // Available
      bookStore.restockBook("The Great Gatsby", 5);
      console.log(bookStore.checkAvailability("The Great Gatsby")); // Available

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
        const myself = {
          name: "Masum",
          age: 25,
          country: "Bangladesh"
        };

        console.log(Object.keys(myself)); // ['name', 'age', 'country']
        //This gives only the keys of the object as strings in an array.
        console.log(Object.entries(myself)); // [['name', 'Masum'], ['age', 25], ['country', 'Bangladesh']]
        //This gives an array of arrays, where each sub-array contains a key and its corresponding value.


## 7. How do you check if an object has a certain property?


    const me = { name: "Masum", age: 25 };

// Using hasOwnProperty method:
      console.log(me.hasOwnProperty("name"));   // true
      console.log(me.hasOwnProperty("gender")); // false

// Using the in operator:
      console.log("name" in person);   // true
      console.log("gender" in person); // false

// Checking directly
      console.log(me.department);
      console.log(person.name !== undefined); // true

// Optional chaining
      const my = me.department?.name;
      console.log(my); // undefined

// Using && (logical AND)
      console.log(me.name && true); // true
      const mydepartment = me.department && me.department.name;
      console.log(mydepartment); // undefined

<b>We can check if an object has a certain property using:</b>

obj.hasOwnProperty('key') – checks own properties only ✅
'key' in obj – checks both own and inherited properties ✅
obj.key !== undefined – not reliable if value is actually undefined ⚠️
obj?.key – safe access using optional chaining ✅

Best: Use hasOwnProperty or 'key' in obj depending on your need.


## 8. What will be the output and why?

    const aPerson = { name: "John" };
    const newPerson = aPerson;
    newPerson.name = "Doe";
    console.log(aPerson.name);

// The output will be "Doe".
// This is because objects are reference types in JavaScript. 
// When we assign aPerson to newPerson, both variables point to the same object in memory. 
// Therefore, changing newPerson also changes aPerson.



## 9. What’s the best way to deeply copy a nested object? Expalin with examples

// The best way to deeply copy a nested object is to use the structuredClone() method or JSON methods (stringify and parse).

// However, JSON methods have limitations with functions, undefined, and special objects like Date.
// The structuredClone() method is a more robust solution for deep cloning.

    const original = {
      name: "John",
      age: 30,
      address: {
        city: "New York",
        zip: "10001"
      }
    };

// Using JSON methods (not recommended for complex objects)
        const jsonCopy = JSON.parse(JSON.stringify(original));
        console.log(jsonCopy);
        jsonCopy.address.city = "Los Angeles";
        console.log(jsonCopy.address.city);
        console.log(original.address.city); // New York (original object remains unchanged)
// Using structuredClone (recommended for complex objects)
        const clone = structuredClone(original);
        console.log(clone);
        clone.address.city = "Los Angeles";
        console.log(clone.address.city); // Los Angeles


## 10. Loop and print values using Object destructuiring


          const users = [
            {
                'name': 'Alex',
                'address': '15th Park Avenue',
                'age': 43
            },
            {
                'name': 'Bob',
                'address': 'Canada',
                'age': 53
            },
            {
                'name': 'Carl',
                'address': 'Bangalore',
                'age': 26
            }
          ];

          for (const { name, address, age } of users) {
            console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
          }

Name: Alex, Address: 15th Park Avenue, Age: 43
Name: Bob, Address: Canada, Age: 53
Name: Carl, Address: Bangalore, Age: 26