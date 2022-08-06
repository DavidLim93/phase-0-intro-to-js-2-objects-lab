// Write your solution in this file!
const employee = {
    name:'Sam',
    streetAddress:'11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee = {
        name:'Sam', 
        streetAddress:'11 Broadway'
    }
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
   employee.streetAddress = '12 Broadway';
    return employee;
  }



function deleteFromEmployeeByKey(employee, name) {
    var newEmployee = Object.assign ({}, employee);
    delete newEmployee['name'];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete employee.name;
    return employee;
  }