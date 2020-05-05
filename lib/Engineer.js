// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer extends Employee {
  constructor (name, id, email, engineerGHUN) {
    super(name, id, email);
    this.engineerGHUN = engineerGHUN;
    }

    getGithub() {
        return(this.engineerGHUN);
          }
    getRole() {
        return("Engineer");
          }

  }

module.exports = Engineer;