const Manager = require ('../lib/Manager');

test('create a Manager object', () => {
    const manager = new Manager('Scott', 4524, 'scottpercy@hotmail.com', 34);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Scott', 4524, 'scottpercy@hotmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 