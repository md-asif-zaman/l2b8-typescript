class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be negative");
        }
        this._baseSalary = newSalary;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 50000;
    }
}
const asif = new Manager("Asid", 1233);
export {};
