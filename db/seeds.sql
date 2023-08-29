INSERT INTO department (name)
VALUES ("Web Development"),
       ("Accounting"),
       ("Sales"),
       ("Human Resources");

INSERT INTO roles (title, salary, department)
VALUES ("manager", 60000, 1),
       ("support", 40000, 3),
       ("supervisor", 50000, 4),
       ("interns", 30000, 2);


INSERT INTO employee (first_name, last_name, roles)
VALUES ("Cyndi", "Hue", 4),
       ("James", "Bond", 3),
       ("Jamie", "Fox", 2),
       ("Peter", "Griffin", 1);

select * 
from roles
inner join department
ON roles.department = department.id
inner join employee
ON employee.roles = roles.id

