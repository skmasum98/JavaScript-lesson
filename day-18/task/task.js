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
nameInput.setAttribute("placeholder", "Full Name")
form.appendChild(nameInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
const emailLabel = document.createElement("label");
emailLabel.innerText = "Email: ";
form.appendChild(emailLabel)
const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("placeholder", "Email")
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

//reset button
const resetBtn = document.createElement("button");
resetBtn.setAttribute("type", "button");
resetBtn.innerText = "Reset";
resetBtn.style.marginLeft= "10px";
form.appendChild(resetBtn);


document.getElementById("form-container").appendChild(form);

// Submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual form submission
  const username = nameInput.value;
  const email = emailInput.value;
  const phone = numberInput.value;

  console.log("Form Submitted!");
  console.log("Name:", username);
  console.log("Email:", email);
  console.log("Phone:", phone);
});

// Reset event listener
resetBtn.addEventListener("click", function () {
  nameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";

  console.log("Form Reset!");
});



// task 2

const form2 = document.getElementById("userForm");
  const table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
  const searchInput = document.getElementById("searchInput");

  form2.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const role = document.getElementById("role").value.trim();
    console.log(name);

    if (name && age && role) {
      const newRow = table.insertRow();

      const nameCell = newRow.insertCell(0);
      const ageCell = newRow.insertCell(1);
      const roleCell = newRow.insertCell(2);
      const actionCell = newRow.insertCell(3);

      nameCell.textContent = name;
      ageCell.textContent = age;
      roleCell.textContent = role;


      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        table.deleteRow(newRow.rowIndex - 1); // -1 because tbody rows are zero-based
      });

      actionCell.appendChild(deleteBtn);

      // Reset form fields
      form.reset();
    }
  });

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    const rows = table.getElementsByTagName("tr");

    for (let row of rows) {
      const nameCell = row.cells[0];
      if (nameCell) {
        const nameText = nameCell.textContent.toLowerCase();
        row.style.display = nameText.includes(filter) ? "" : "none";
      }
    }
  });


//   Task 3
const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Apply theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    body.classList.add(savedTheme + "-theme");

    // Toggle theme on click
    themeToggle.addEventListener("click", () => {
      const isLight = body.classList.contains("light-theme");

      // Remove current, add new
      body.classList.remove(isLight ? "light-theme" : "dark-theme");
      body.classList.add(isLight ? "dark-theme" : "light-theme");

      // Save to localStorage
      const newTheme = isLight ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    });