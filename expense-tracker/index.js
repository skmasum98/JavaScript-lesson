console.log("Expense Tracker");


function createExpenseTracker(username, initialBudget) {
    //private data
    let user = {
        name: username,
        budget: initialBudget,
    };
    let expenses = [];
    let id = 1;

    // add expense
    function addExpense(amount, category, description) {
        const expense = {
            id: id++,
            amount: amount,
            category: category,
            description: description
        };
        expenses.push(expense);
    }
    // remove expense
    function removeExpense(expenseId) {
        expenses = expenses.filter(expense => expense.id !== expenseId);
    }
    // update expense
    function updateExpense(expenseId, newAmount, newCategory, newDescription) {
        const expense = expenses.find(exp => exp.id === expenseId);
        if (expense) {
            expense.amount = newAmount;
            expense.category = newCategory;
            expense.description = newDescription;
        }
    }
    // get total expenses
    function getTotalExpenses() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
    // get expenses by category
    function getExpensesByCategory(category) {
        return expenses.filter(expense => expense.category === category);
    }
    // get highest expense
    function getHighestExpense() {
        return expenses.reduce((max, expense) => (expense.amount > max.amount ? expense : max), expenses[0]);
    }
    // get lowest expense
    function getLowestExpense() {
        return expenses.reduce((min, expense) => (expense.amount < min.amount ? expense : min), expenses[0]);
    }
    // get user info
    function getUserInfo() {
        return user;
    }
    // show all expenses
    function showAllExpenses() {
        return expenses;
    }
    // update user data
    function updateUserData(newName, newBudget) {
        user.name = newName;
        user.budget = newBudget;
    }

    // return public methods
    return {
        addExpense,
        removeExpense,
        updateExpense,
        getTotalExpenses,
        getExpensesByCategory,
        getHighestExpense,
        getLowestExpense,
        getUserInfo,
        showAllExpenses,
        updateUserData
    };
}
// Example usage
const tracker = createExpenseTracker("Tapas", 5000);
tracker.addExpense(200, "Food", "Lunch");
tracker.addExpense(500, "Shopping", "New Shoes");
console.log(tracker.getTotalExpenses()); // 700

console.log("Expenses by Category:");

const foodExpenses = tracker.getExpensesByCategory("Food");
console.log(foodExpenses); // [{ id: 1, amount: 200, category: "Food", description: "Lunch" }]
console.log("Get Highest and Lowest Expenses:");

console.log(tracker.getHighestExpense()); // { id: 2, amount: 500, category: "Shopping", description: "New Shoes" }
console.log(tracker.getLowestExpense()); // { id: 1, amount: 200, category: "Food", description: "Lunch" }

console.log("User Info:");
console.log(tracker.getUserInfo()); // { name: "Tapas", budget: 5000 }

console.log("All Expenses:");
console.log(tracker.showAllExpenses()); // [{ id: 1, amount: 200, category: "Food", description: "Lunch" }, { id: 2, amount: 500, category: "Shopping", description: "New Shoes" }]

console.log("Updating User Data:");

tracker.updateUserData("Tapas Kumar", 6000);
console.log(tracker.getUserInfo()); // { name: "Tapas Kumar", budget: 6000 }
console.log("removeExpense(1)");

tracker.removeExpense(1);
console.log(tracker.showAllExpenses()); // [{ id: 2, amount: 500, category: "Shopping", description: "New Shoes" }]

console.log(`Updating Expense: 2, 600, "Shopping", "New Shoes Updated"`);
tracker.updateExpense(2, 600, "Shopping", "New Shoes Updated");
console.log(tracker.showAllExpenses()); // [{ id: 2, amount: 600, category: "Shopping", description: "New Shoes Updated" }]

console.log("Adding another expense: 700, Food, Dinner");
tracker.addExpense(700, "Food", "Dinner");
console.log(tracker.showAllExpenses()); 

console.log("Total Expense: " + tracker.getTotalExpenses()); // 900