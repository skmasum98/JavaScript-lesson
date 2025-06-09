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

       

        taskList.appendChild(li)





    taskInput.value = ""
    
}