const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //call employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    //change employee role
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;