class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
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
}

const manager = new Manager("Asif", 23333, 22);

console.log(manager.employeeCount);
