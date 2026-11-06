class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be negative");
        }
        this._baseSalary = newSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    calculatePay(taxRate) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}
//* Polymorphism
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
const employee = new Employee("Mizan", 25000);
const manager = new Manager("Mizan", 30000);
console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
export {};
// const employee = new Employee("Mir", 20000);
// console.log(employee.calculatePay());
