const Engineer = require ('../lib/Engineer');

test('create a new Engineer object', () => {
    const engineer = new Engineer ('Scott', 4524, 'scottpercy@hotmail.com', 'sdpercy');

    expect(engineer.github).toEqual(expect.any(String));
});