DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

create table department(
id int not null auto_increment primary key, 
name varchar(30) not null
);

create table role(
id int not null primary key
title varchar(30) not null,
salary decimal,
department_id int
);

create table employee(
id int not null primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int,
manager_id int
);

select * from department;
select * from role;
select * from employee