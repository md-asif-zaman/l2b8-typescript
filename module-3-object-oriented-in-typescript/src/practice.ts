class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  set salary(salary: number) {
    if (salary < 0) {
      throw new Error("Salary can not be negative");
    }
    this._baseSalary = salary;
  }

  get salary(): number {
    return this._baseSalary;
  }
}

const emp = new Employee("Asif", 2000);
emp.salary = -3000;
console.log(emp.salary);
