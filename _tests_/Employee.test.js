const Employee = require('../lib/Employee');

test('creates a new Employee object', () => {
    const employee = new Employee('Scott', 4524, 'scottpercy@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets the Employee ID', () => {
    const employee = new Employee('Scott', 4524, 'scottpercy@hotmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));

});

test('gets the Employees email', () => {
    const employee = new Employee('Scott', 4524, 'scottpercy@hotmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

});

test('gets the Employee role', () => {
    const employee = new Employee('Scott', 4524, 'scottpercy@hotmail.com');  
    expect(employee.getRole()).toEqual("Employee");
}); 