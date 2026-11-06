class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary can not be negative");
    }
    this._baseSalary = newSalary;
  }

  get baseSalary(): number {
    return this._baseSalary;
  }

  calculatePay(taxRate: number): number {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

//* Polymorphism
class Manager extends Employee {
  override calculatePay(): number {
    return this.baseSalary + 5000;
  }
}

const employee = new Employee("Mizan", 25000);
const manager = new Manager("Mizan", 30000);

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());

// const employee = new Employee("Mir", 20000);
// console.log(employee.calculatePay());
