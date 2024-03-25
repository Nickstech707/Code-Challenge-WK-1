// Student Grade Generator

// Import the prompt-sync library
const prompt = require("prompt-sync")({ sigint: true });

// Generates the student's grade based on the input marks
function generateGrade() {
  let marks = parseFloat(prompt("Enter the student's marks:"));

  // Determines the grade based on the marks
  if (marks > 79 && marks <= 100 ) {
    grade = "A";
  }  
  if (marks >= 60 && marks <= 79) {
    grade = "B";
  } 
  if (marks >= 49 && marks <= 59) {
    grade = "C";
  } 
  if (marks >= 40 && marks <= 48) { 
    grade = "D";
  } 
  if (marks < 40) {
      grade = "E";
  } 
  if (marks < 0 || marks > 100) {
    grade = "Invalid Input! Please enter a number between 0 and 100";
  }
  console.log("The student's grade is: " + grade); //prints a string to the console
}

// Calls the generateGrade function 
generateGrade();