class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    set baseSalary(newSalary) {
        this._baseSalary = newSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    calculateSalary(tax) {
        return this._baseSalary - this._baseSalary * tax;
    }
}
class Manager extends Employee {
    calculateSalary() {
        return this.baseSalary + 5000;
    }
}
const emp = new Manager("Asif", 20000);
console.log(emp.calculateSalary());
export {};
