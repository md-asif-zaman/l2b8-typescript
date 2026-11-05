class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    set salary(salary) {
        if (salary < 0) {
            throw new Error("Salary can not be negative");
        }
        this._baseSalary = salary;
    }
    get salary() {
        return this._baseSalary;
    }
}
const emp = new Employee("Asif", 2000);
emp.salary = -3000;
console.log(emp.salary);
export {};
