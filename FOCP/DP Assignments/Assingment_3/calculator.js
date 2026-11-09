function calculate(a, b, callback) {
    return callback(a, b);
}

function analyzeArray(arr, callback) {
    return callback(arr);
}

// --- 2. Arithmetic Callbacks ---
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (y !== 0 ? x / y : "Error: Cannot divide by zero");

// --- 3. Array Analysis Callbacks ---
const findFirstEven = (arr) => arr.find((num) => num % 2 === 0) ?? "None found";
const findMax = (arr) => Math.max(...arr);
const calculateSum = (arr) => arr.reduce((total, num) => total + num, 0);

// --- 4. Menu-Driven Controller ---
function startCalculator() {
    let running = true;

    while (running) {
        const choice = prompt(
            "=== MENU ===\n" +
            "1. Arithmetic Calculation\n" +
            "2. Array Analysis\n" +
            "3. Exit\n" +
            "Enter your choice (1-3):",
        );

        if (choice === "1") {
            const num1 = parseFloat(prompt("Enter first number:"));
            const num2 = parseFloat(prompt("Enter second number:"));
            const op = prompt("Choose operation (+, -, *, /):");

            const operations = {
                "+": add,
                "-": subtract,
                "*": multiply,
                "/": divide,
            };

            if (operations[op]) {
                alert(`Result: ${calculate(num1, num2, operations[op])}`);
            } else {
                alert("Invalid operator selected.");
            }
        } else if (choice === "2") {
            const input = prompt(
                "Enter numbers separated by commas (e.g., 5, 12, 8, 21):",
            );
            // Uses .split() to turn the string input into an array of numbers
            const numbers = input.split(",").map((item) => parseFloat(item.trim()));

            const analysisChoice = prompt(
                "Choose analysis:\n" +
                "1. Find First Even Number\n" +
                "2. Find Maximum Number\n" +
                "3. Sum of All Numbers",
            );

            const analyses = { 1: findFirstEven, 2: findMax, 3: calculateSum };

            if (analyses[analysisChoice]) {
                alert(
                    `Analysis Result: ${analyzeArray(numbers, analyses[analysisChoice])}`,
                );
            } else {
                alert("Invalid analysis option.");
            }
        } else if (choice === "3" || choice === null) {
            running = false;
            alert("Calculator exited.");
        } else {
            alert("Invalid choice. Please enter 1, 2, or 3.");
        }
    }
}

// Run the program
startCalculator();
