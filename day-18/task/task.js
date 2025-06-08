console.log("day 18 task");

const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "#");

const nameLabel = document.createElement("label");
nameLabel.innerText = "Name: ";
form.appendChild(nameLabel);
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "username");

form.appendChild(nameInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
const emailLabel = document.createElement("label");
emailLabel.innerText = "Email: ";
form.appendChild(emailLabel)
const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
form.appendChild(emailInput)

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

//number
const numberLabel = document.createElement("label");
numberLabel.innerText = "Phone Number: "
form.appendChild(numberLabel)

const numberInput = document.createElement("input");
numberInput.setAttribute("type", "number")
numberInput.setAttribute("placeholder", "Number")
form.appendChild(numberInput)

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// submit
const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "Submit";

form.appendChild(submitBtn)
document.getElementById("form-container").appendChild(form);