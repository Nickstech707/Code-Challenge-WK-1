## Student Grade Generator 

This program calculates a student’s grade based on the input marks. It follows the specified grading criteria:

  A: 79 to 100 marks
  B: 60 to 79 marks
  C: 49 to 59 marks
  D: 40 to 48 marks
  E: 0 to 40 marks
### How to Use
 1. Make sure you have Node.js installed on your system.

 2. Clone this repository or download the student-grade-generator.js file.

 3. Open your terminal or command prompt.

 4. Navigate to the directory where the file is located.

 5. Run the program using the following command:
    [node student-grade-generator.js]

 6. Enter the student’s marks when prompted.

 7. The program will display the corresponding grade.

 #### Example
 * If entered student's marks is 85

 * The student's grade is A

 #### Validating input
 * Marks must be between 0 and 100.

 * Invalid input will display an prompt error message.

### Tech
Javascript



## Speed Detector

This program checks if a Driver is driving past the legal speed limit and calculates the number of demerits depending on the speed of the car.

### How to use

 1. Ensure that you have Node.js installed in your system.

 2. Clone this repository or download the file speed-detector.js

 3. Open your terminal or command prompt.

 4. Navigate to the directory containing this file.

 5. To run the program, use this command:
     [node speed-detector.js]

 6. When prompted for input, type in the speed of the car.It will either display to you if it is within acceptable limits "Ok" or "Demerit points" or "License Supended" due to exceeded demerit points check. 

### Features
 * This program uses vehicle’s speed as an input parameter.

 * Checks whether speed exceeds 70 km/hour which is maximum under law.

 * Calculates penalties against overspeeding behavior.

 * Additionally indicates when one’s driving license has been revoked after acquiring many demerit points on it.

### Example

  * If input Car Speed (in km/h) is 90

  * OUtput Points: 4

### Tech
Javascript



## Net Salary Calculator

This program calculates the gross salary, PAYE (Pay As You Earn) and NHIF (National Hospital Insurance Fund) deductions for an individual based on their basic salary and benefits.

### How to Use
 1. Ensure you have Node.js installed on your system.

 2. Clone this repository or download the salary-calculator.js file.

 3. Open your terminal or command prompt.

 4. Navigate to the directory where the file is located.

 5. Run the program using the following command:
     [node salary-calculator.js]

 6. Enter your basic salary and benefits when prompted.

 7. The program will calculate and display the gross salary, PAYE, and NHIF deductions.

### Features
 * Gross Salary Calculation: Computes the gross salary by adding the    basic salary to the benefits.

 * PAYE Calculation: Calculates the monthly taxable pay using progressive PAYE rates.

 * NHIF Deductions: Determines the NHIF deductions based on the gross salary.

### Example

  * If you enter Basic Salary of KES 50,000 and Benefits of KES 10,000

  * The output Net Salary will be KES 37,640 

### Tech
Javascript


## Prerequisites
   * Node.js
   * prompt-sync npm package
   
## Installation
To run these program, install the prompt-sync package using npm:
          [npm install prompt-sync]

## Author
Nicholas Muturi Muriithi

## License
The MIT License (MIT)

Copyright (c) 2014-2019 Paolo Fragomeni & David Mark Clements

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.