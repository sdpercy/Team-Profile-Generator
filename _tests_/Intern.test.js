const Intern = require ('../lib/Intern');

test('create a new Intern object', () => {
    const intern = new Intern ('Scott', 4524, 'scottpercy@hotmail.com', 'UofT');

    expect(intern.school).toEqual(expect.any(String));
});