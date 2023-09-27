## Instructions
## Prerequisites

Before you run these programs, make sure you have Node.js installed on your computer.

## How to Run

1. Download or clone this repository to your local machine.

2. Open your terminal or command prompt.

3. Navigate to the project directory.

4. Run the program using Node.js.

## Task 1.Student grade generator.

This is a simple JavaScript program that calculates and displays a student's grade based on their input marks. It prompts the user to enter the student's marks (between 0 and 100) and then calculates and displays the corresponding grade.


## Program Logic

- The program checks if the input is a valid number between 0 and 100. If the input is not a valid number, it displays an error message.

- It calculates the grade based on the following criteria:
- A: Marks > 79
- B: 60 <= Marks <= 79
- C: 50 <= Marks <= 59
- D: 40 <= Marks <= 49
- E: Marks < 40

- The calculated grade is displayed to the user.
## Usage

To use the `studentGrade` function, follow these steps:

1. **Include the Function:**

   Include the `studentGrade` function in your JavaScript code. You can copy and paste the function into your project.

   ```javascript
   function studentGrade() {
     // Function code here
   }

## Example
// Include the studentGrade function in your code

function studentGrade() {
  // Function code here
}

// Call the function to calculate the grade
studentGrade();

# Task 2: Speed Detector Function.

## Overview

The `speedDetector()` function is a JavaScript function designed to detect the speed of a car and determine whether any demerit points should be assigned based on the car's speed relative to a specified speed limit. This function provides feedback on the car's speed and the number of demerit points, if applicable. This README provides a comprehensive guide on how to use the `speedDetector()` function effectively.

## Functionality

The `speedDetector()` function is equipped to perform the following tasks:

1. **Speed Detection:** It calculates and evaluates the speed of a car based on the input parameters provided.

2. **Demerit Points Calculation:** It determines if any demerit points should be assigned to the driver based on their speed relative to a specified speed limit.

3. **Feedback Generation:** It generates feedback for the car's speed and any assigned demerit points, if applicable.

## Program Logic

The `speedDetector()` function is implemented as follows:
const speedDetector = (speed) => {
    // Function logic here

    // Return result
};

// Call the function with a speed value and print the result
console.log(speedDetector(speedValue));


## Task 3.
# Net Salary Calculator Function

The `calculateNetSalary()` function is a JavaScript tool designed to help you determine an individual's net salary by considering various deductions and rates, including PAYE (Tax), NHIF (National Hospital Insurance Fund) deductions, NSSF (National Social Security Fund) deductions, and the Affordable Housing Levy.


## How to Use

To use this function, you need to provide two inputs:

1. `basicSalary`: The individual's basic salary.
2. `benefits`: Any additional benefits or bonuses to be added to the salary.

The function will then perform the following calculations:

- **PAYE (Tax)**: Calculates the income tax (PAYE) based on a predefined tax rate.
- **NHIF Deductions**: Computes the NHIF deductions based on the individual's basic salary.
- **NSSF Deductions**: Computes the NSSF deductions based on the individual's basic salary.
- **Gross Salary**: Calculates the gross salary by adding the basic salary and benefits.
- **Net Salary**: Determines the net salary by subtracting PAYE, NHIF deductions, NSSF deductions, and the Affordable Housing Levy from the gross salary.
- **Affordable Housing Levy**: Calculates the Affordable Housing Levy based on the basic salary.

Good luck and happy coding!

## Author

- Maureen Chelangat.

## License

This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.







