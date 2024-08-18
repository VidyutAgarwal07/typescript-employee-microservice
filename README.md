# typescript-employee-microservice
onboard &amp; offboard employee 

# Setting up typescript project
1) Install Nodejs
2) Initialize Nodejs project using command: npm init -y
3) create a tsconfig.json file using command: npx tsc --init

# Task
Using Typescript create a microservice to onboard as well as offboard employee in project.
Employee Details: Name, EmpId, Joining Date, End Date, Skillset, type (PMO, Developer, Architect, Manager, Tester)

APIs:/
post employee/login
post employee/onboard
put employee/offboard/{id}
get employee/{id}
post employee/logout

The user who will be onboarding is also a employee of type PMO. Login Credential of PMO will be in different table (User)
The user will login and once successfully logged in will call apis. Logged in user should have Bearer Token (JWT) that he will used for further api calls.

Following error scenarios should also be handled:
Duplicate employees(duplicate empId) should not be added.
Error handling for invalid Bearer Token and empty Bearer Token
Error handling for invalid login credential
When Creating Employee record all fields are mandatory except End Date.
