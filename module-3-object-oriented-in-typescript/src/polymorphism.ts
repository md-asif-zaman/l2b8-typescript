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
// change calculatePay method
class Manager extends Employee {
  override calculatePay(): number {
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }
  override calculatePay(): number {
    return this.baseSalary + 3000;
  }
}

const employee = new Employee("Mizan", 20000);
const manager = new Manager("Mizan", 20000);
const developer = new Developer("Foroz", 20000, "Backend");

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay());
