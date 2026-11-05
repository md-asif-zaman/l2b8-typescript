class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    set baseSalary(salary) {
        if (salary < 0) {
            throw new Error("Salary can not be negative");
        }
        this._baseSalary = salary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    employeeCount;
    constructor(name, _baseSalary, employeeCount) {
        super(name, _baseSalary);
        this.employeeCount = employeeCount;
    }
}
const manager = new Manager("Asif", 23333, 22);
console.log(manager.employeeCount);
export {};
