// Object
const person = {
    name: "Masum",
    age: 24
  };
  
  const modifyPerson = person;
  modifyPerson.age = 25;
  modifyPerson.name = "John";
  
  console.log("Original Person:", person);


// Array
const languages = ["JavaScript", "Python"];
const favoriteLanguages = languages;
favoriteLanguages.push("Go");

console.log("Original Languages:", languages); 




// let name = "Masum";
// let age = 24;
// let isStudent = true;
// const favoriteLanguage = "JavaScript";

// // Reassigning let variables (✅ works)
// name = "John";
// age = 30;
// console.log("Updated Name:", name);
// console.log("Updated Age:", age);


// // console.log("Name:", name);
// // console.log("Age:", age);
// console.log("Is Student:", isStudent);
// // console.log("Favorite Programming Language:", favoriteLanguage);

// favoriteLanguage = "Python"; 

// console.log("Updated Favorite Language:", favoriteLanguage);