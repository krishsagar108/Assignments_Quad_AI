// Store a student's name, roll number, department, and marks in five subjects using
// appropriate variables and data types.
// Store the five subject marks in an array.
// 1. Write a function calculateTotal(marks) to calculate the total marks.
// 2. Write a function calculatePercentage(marks) to calculate the percentage.
// 3. Write a function findHighest(marks) to find the highest mark.
// 4. Write a function findLowest(marks) to find the lowest mark.
// 5. Count how many subjects have marks greater than or equal to 40.
// 6. Convert the student's name to uppercase and display the number of characters in the name.
// 7.Display the final report with the student's details, total, percentage, highest mark,lowest mark, and number of subjects passed.


// Sample input
// let name = "Rahul Kumar";
// let rollNo = 101;
// let marks = [78, 85, 62, 91, 34];

// Expected output
// Student: RAHUL KUMAR
// Roll Number: 101
// Total Marks: 350
// Percentage: 70%
// Highest Marks: 91
// Lowest Marks: 34
// Subjects Passed: 4
// Bonus challenge: Create a function that accepts the marks array and returns
// "Good"
// ,
// ,
// "Average"
// , or "Needs Improvement" based on the
// "Excellent"
// percentage.


// let namess = "Rahul Kumar";
// let rollNo = 101;
// let marks = [78, 85, 62, 91,34];

function calculateTotal(marks){
    total = 0
    for (let index = 0; index < marks.length; index++) {
        total+=marks[index]
    }
    return total
}


// debugger
function calculate_percentage(total){
    return (total/500)*100
}


function findHighest(marks){
    let num1 = marks[0]
    for (let index = 0; index < marks.length; index++) {
        let num2=marks[index]
        if (num1>=num2){
            num1=num1
        }
        else{
            num1=num2
        }
    }
    return num1
}

function findLowest(marks){
    let num1 = marks[0]
    for (let index = 0; index < marks.length; index++) {
        let num2=marks[index]
        if (num1<=num2){
            num1=num1
        }
        else{
            num1=num2
        }
    }
    return num1
}

function countGreatorThan40(marks){
    count=0
    for (let index = 0; index < marks.length; index++) {
        if (marks[index]>=40){
            count++
        }
    }
    return count;
}

function remark(percentage) {
    if (percentage >= 80) {
        return "Excellent";
    }
    else if (percentage > 60 && percentage < 80) { 
        return "Good";
    }
    else {
        return "Average";
    }
}

function output(name,roll,marks,calculateTotal,calculate_percentage,findHighest,findLowest,countGreaterthan40){
    const total = calculateTotal(marks);
    const percentage = calculate_percentage(total);
    
    // Requirement 6: Uppercase name and character count
    const upperName = name.toUpperCase();
    const charCount = name.length;
    
    return `
        <p><strong>Student:</strong> ${upperName} (${charCount} characters)</p>
        <p><strong>Roll Number:</strong> ${roll}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Highest Marks:</strong> ${findHighest(marks)}</p>
        <p><strong>Lowest Marks:</strong> ${findLowest(marks)}</p>
        <p><strong>Subjects Passed:</strong> ${countGreaterthan40(marks)}</p>
        <p><strong>Remarks (Bonus):</strong> ${remark(percentage)}</p>
    `;
}

const form = document.querySelector(".student_form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let namess = document.getElementById("student_name").value;
    let rollNo = document.getElementById("student_roll").value;
    let marks = (document.getElementById("subject_marks").value).split(",").map(Number);

    // console.log(name);
    // console.log(roll);
    // console.log(marks);
    let result = output(namess,rollNo,marks,calculateTotal,calculate_percentage,findHighest,findLowest,countGreatorThan40)
    document.getElementsByClassName("output")[0].innerHTML= result

});