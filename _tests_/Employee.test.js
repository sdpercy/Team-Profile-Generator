const Employee = require('../lib/Employee');

test('creates a new Employee object', () => {
    const employee = new Employee('Scott', 4524, 'scottpercy@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

