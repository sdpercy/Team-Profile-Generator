const Intern = require ('../lib/Intern');

test('create a new Intern object', () => {
    const intern = new Intern ('Scott', 4524, 'scottpercy@hotmail.com', 'UofT');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets school of employee', () => {
    const intern = new Intern('Scott', 4524, 'scottpercy@hotmail.com', 'UofT');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
}); 

test('gets role of employee', () => {
    const intern = new Intern('Scott', 4524, 'scottpercy@hotmail.com', 'UofT');

    expect(intern.getRole()).toEqual("Intern");
}); 