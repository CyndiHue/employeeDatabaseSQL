INSERT INTO department (name)
VALUES ("Web Development"),
       ("Accounting"),
       ("Sales"),
       ("Human Resources");

INSERT INTO roles (title, salary)
VALUES ("manager", 60000),
       ("support", 40000),
       ("supervisor", 50000),
       ("interns", 30000);


INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Cyndi", "Hue", 5),
       ("James", "Bond", 4),
       ("Jamie", "Fox", 3),
       ("Peter", "Griffin", 2);

select * from department;
select * from roles;
select * from employee