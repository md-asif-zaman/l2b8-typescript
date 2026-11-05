//* Access Modifier
//? public
//? private
//? protected
//? readonly
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    //Getter
    get baseSalary() {
        return this._baseSalary;
    }
    //Setter
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be less than 0");
        }
        this._baseSalary = newSalary;
    }
}
const employee1 = new Employee("Mir", 2000);
employee1.baseSalary = 3000;
export {};
