class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  set baseSalary(newSalary: number) {
    this._baseSalary = newSalary;
  }

  get baseSalary(): number {
    return this._baseSalary;
  }

  calculateSalary(tax: number): number {
    return this._baseSalary - this._baseSalary * tax;
  }
}

class Manager extends Employee {
  override calculateSalary(): number {
    return this.baseSalary + 5000;
  }
}

const emp = new Manager("Asif", 20000);
console.log(emp.calculateSalary());
