const mysql = require('mysql2');

const connection = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',

    password: '',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

connection.connect(function(err) {
    if(err) throw err;
})

module.exports = connection;