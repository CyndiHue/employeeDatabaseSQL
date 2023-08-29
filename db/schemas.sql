DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

create table department(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name varchar(30) not null
);

create table roles(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title varchar(30) not null,
salary decimal,
department_id int,
  FOREIGN KEY (department)
  REFERENCES department(id)
  ON DELETE SET NULL
);

create table employee(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name varchar(30) not null,
last_name varchar(30) not null,
roles_id int,
  FOREIGN KEY (roles)
  REFERENCES roles(id)
  ON DELETE SET NULL
-- manager_id int
);

select * from department;
select * from roles;
select * from employee