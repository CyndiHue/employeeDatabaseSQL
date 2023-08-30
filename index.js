const inquirer = require ('inquirer');
//import db from './lib/db';
const db = require('./lib/db')
require('console.table');

const questions = [
  {
    type: 'list',
    name: 'main',
    message: 'Select one of the following:',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    when(answers) {
      return !view('main')(answers);
    },
  },
  // {
  //   type: 'input',
  //   name: 'addDepartment',
  //   message: 'What is the name of the Department',
  //   when(answers) {
  //     return answers.main === 'add a department';
  //   },
  // },
  // {
  //   type: 'input',
  //   name: 'addRole',
  //   message: 'What is the name of the Role?',
  //   when(answers) {
  //     return answers.main === 'add a role';
  //   },
  // },
  // {
  //   type: 'input',
  //   name: 'roleSalary',
  //   message: 'What is the salary for the new role?',
  //   when(answers) {
  //     return answers.main === 'add a role';
  //   },
  // },
  // {
  //   type: 'list',
  //   name: 'roleDept',
  //   message: 'Which department does the role belong to?',
  //   choices:['1','2','3'],
  //   when(answers) {
  //     return answers.main === 'add a role';
  //   },
  // },
  // {
  // type: 'input',
  // name: 'addEmployeeFirstName',
  // message: 'What is the employees first name',
  // when(answers) {
  //   return answers.main === 'add an employee';
  // },
  // },
  // {
  //   type: 'input',
  //   name: 'addEmployeeLastName',
  //   message: 'What is the employees last name',
  //   when(answers) {
  //     return answers.main === 'add an employee';
  //   },
  // },
  // {
  //   type: 'input',
  //   name: 'employeeRole',
  //   message: 'What is the employees last name',
  //   when(answers) {
  //     return answers.main === 'add an employee';
  //   },
  // },
  // {
  //   type: 'input',
  //   name: 'employeeManager',
  //   message: 'Who is the employees manager',
  //   when(answers) {
  //     return answers.main === 'add an employee';
  //   },
  // },
  // {
  //   type: 'input',
  //   name: 'addNewRole',
  //   message: 'What is the employees new role',
  //   when(answers) {
  //     return answers.main === 'update an employee role' ;
  //   },
  // },
  // {
  //   type: 'input',
  //   name: 'addEmployeeRoleFirst',
  //   message: 'What is the employees last name',
  //   when(answers) {
  //     return answers.main === 'update an employee role';
  //   },
  // },
  // {
  //   type: 'input',
  //   name: 'addEmployeeRoleLast',
  //   message: 'What is the employees first name',
  //   when(answers) {
  //     return answers.main === 'update an employee role' ;
  //   },
  // },
];

function view(selected) {
  return function (answers) {
    return answers[selected];
  };
}

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
  if (answers.main === 'view all departments') {
    viewDepartments()
  } else if() {}
});


function viewDepartments() {
  db.findAllDepts()
  .then(([departments]) => {
    console.table(departments)
  })
}