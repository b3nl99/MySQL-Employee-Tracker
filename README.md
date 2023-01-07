# MySQL-Employee-Tracker
Module 12 Challenge

## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)
* [Demonstration](#demonstration)
* [Questions](#questions)

## Description
As a business owner, it would be helpful to be able to view and manage the departments, roles, and employees in your company and organize and plan your business. Employee Tracker is here to help you keep everything organized and updated. The ability to find what you're looking for is right at your fingertips, all in one simple command prompt application.

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Languages
This application was built using:
* JavaScript
* Node/NPM
* Inquirer
* SQL
* MySQL2

## Installation
1. **Copy Link:** Hit the "Code" button within this GitHub repo to copy link.
2. **Clone:** Use the command "git clone *paste link here*".
3. **NPM:** Run the command "npm install" to install Node Package Manager and the following dependencies from the package.json file:
* inquirer
* MySQL2
* console.table
4. **MySql:**
* In integrated terminal, use "mysql -u *username* -p"
* Enter your MySQL password to login
* Download database and tables to your remote workspace from the 'db' folder using commands:
    * 'source db/db.sql'
    * 'source db/schema.sql'
    * 'source db/seeds.sql'

    ## Usage
After following installation instructions, navigate to your integrated terminal and begin the prompt using the command 'npm start' or 'node index.js.'

From the main menu, select your desired option:
* View all departments
* View all roles
* View all employees by manager
* View all employees by department
* View utilized budget by department
* Add a department
* Add a role
* Add an employee
* Update an employee role
* Remove a department
* Remove a role
* Remove an employee

Follow the prompts to add, update, or remove if chosen or simply select from the view list to access your tables.

Each selection, once completed, will bring you back to the main menu. To finish your session, simply close the terminal.

## Demo

## Contacts
GitHub: https://github.com/b3nl99 
Email: blee0963@gmail.com


