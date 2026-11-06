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
// change calculatePay method
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.type = type;
    }
    calculatePay() {
        return this.baseSalary + 3000;
    }
}
const employee = new Employee("Mizan", 20000);
const manager = new Manager("Mizan", 20000);
const developer = new Developer("Foroz", 20000, "Backend");
console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay());
export {};
