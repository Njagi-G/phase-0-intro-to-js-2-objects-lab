// Write your solution in this file!


//Instruction 1:

let employee = {
    name: "Frank Sinatra",
    streetAdress: "10 Naivasha Road"
}

console.log(employee);


//Instruction 2:

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

const newEmployee = updateEmployeeWithKeyAndValue (
    employee,
    "name",
    "Elvis Presley"
)

console.log(newEmployee);


//Instruction 3:

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key]=value;
    return employee;
}

employee = destructivelyUpdateEmployeeWithKeyAndValue (
    employee,
    "name",
    "Dean Martin",
)

console.log(employee);


//Instruction 4:

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

console.log(newEmployee);


//Instruction 5:

function destructivelyDeleteFromEmployeeByKey (employee, key) {

    delete employee[key];

    return employee;
}

console.log(employee);
