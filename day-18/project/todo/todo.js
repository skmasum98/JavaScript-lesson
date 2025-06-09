function addTask() {
    console.log("add task");

    const taskInput = document.getElementById("taskInput")

    const taskList = document.getElementById("taskList")

    console.log(taskInput.value);

    const task = taskInput.value;

    if (task.trim() === "") return;
        const li = document.createElement("li")
        li.innerText = task

        

         // complete btn
        const completeBtn = document.createElement("button")
        completeBtn.innerText ="✅"
        completeBtn.style.marginLeft= "5px"
        completeBtn.onclick = function () {
            li.classList.toggle("completed")
        }
        li.appendChild(completeBtn)
        // delete btn
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText ="❌"
        deleteBtn.style.marginLeft= "5px";
        deleteBtn.onclick = function () {
            li.remove();
        }
        li.appendChild(deleteBtn)


        // edit btn
        const editBtn = document.createElement("button")
        editBtn.innerText ="📝"
        editBtn.style.marginLeft= "5px";
        editBtn.onclick = function () {
            // Get current text of the list item (excluding button text)
            const currentText = li.firstChild.textContent.trim();

            console.log(currentText);
            

            // Create an input field with the current text
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = currentText;

            // Create a save button
            const saveBtn = document.createElement("button");
            saveBtn.innerText = "💾";
            saveBtn.style.marginLeft = "5px";

            // Replace the current li content with the input and save button
            li.innerHTML = "";
            li.appendChild(editInput);
            li.appendChild(saveBtn);

            saveBtn.onclick = function () {
                const updatedText = editInput.value.trim();
                li.innerHTML = updatedText;
                li.appendChild(completeBtn)
                li.appendChild(deleteBtn); // Re-append delete button (if you have one)
                li.appendChild(editBtn); // Re-append edit button
            };
        };
        li.appendChild(editBtn)

        taskList.appendChild(li)

    taskInput.value = ""
}

function filterTasks() {
    const inputElem = document.getElementById("searchInput");
    const input = inputElem.value;

    const items = document.querySelectorAll("ul#taskList li");

    items.forEach((item) => {
         item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
        
    });
}