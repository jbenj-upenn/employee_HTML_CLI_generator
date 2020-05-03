// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Intern extends Employee {
  constructor (name, id, email, internSchool) {
    super(name, id, email);
    this.internSchool = internSchool;
    }

    getInternSchool() {
        return(this.internSchool);
          }
    getRole() {
        return("Intern");
          }

  }

module.exports = Intern;