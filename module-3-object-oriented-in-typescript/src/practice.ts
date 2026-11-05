class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  set baseSalary(salary: number) {
    if (salary < 0) {
      throw new Error("Salary can not be negative");
    }
    this._baseSalary = salary;
  }

  get baseSalary(): number {
    return this._baseSalary;
  }

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  employeeCount: number;
  constructor(name: string, _baseSalary: number, employeeCount: number) {
    super(name, _baseSalary);
    this.employeeCount = employeeCount;
  }

  describeSalary(): string {
    return `Salary of ${this.name} is ${this._baseSalary}`;
  }
}

const manager = new Manager("Asif", 23333, 34);

console.log(manager.describeSalary());
