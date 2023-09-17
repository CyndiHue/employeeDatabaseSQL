// // const express = require('express');
// const mysql = require('mysql2');
const connection = require('./connection')

// // const PORT = process.env.PORT || 3001;
// // const app = express();


// // app.use(express.urlencoded({ extended: false }));
// // app.use(express.json());

// const db = mysql.createConnection(
//   {
//     host: 'localhost',

//     user: 'root',

//     password: '',
//     database: 'employeeTracker_db'
//   },
//   console.log(`Connected to the employeeTracker_db database.`)
// );

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepts() {
    return this.connection.promise().query('SELECT * FROM department');
  }
  findAllRoles() {
    return this.connection.promise().query('SELECT * FROM roles');
  }
  findAllEmployees() {
    return this.connection.promise().query('SELECT * FROM employee');
  }
  // Add next method


}

module.exports = new DB(connection)



  // Query database
// db.query('SELECT * FROM department', function (err, results) {
//   console.log(results);
// });


// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });