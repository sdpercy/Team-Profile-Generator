const Engineer = require ('../lib/Engineer');

test('create a new Engineer object', () => {
    const engineer = new Engineer ('Scott', 4524, 'scottpercy@hotmail.com', 'sdpercy');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github of employee', () => {
    const engineer = new Engineer('Scott', 4524, 'scottpercy@hotmail.com', 'sdpercy');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
}); 

test('gets role of employee', () => {
    const engineer = new Engineer('Scott', 4524, 'scottpercy@hotmail.com', 'sdpercy');

    expect(engineer.getRole()).toEqual("Engineer");
}); 