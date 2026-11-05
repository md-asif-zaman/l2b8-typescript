//* Access Modifier
//? public
//? private
//? protected

//? readonly

class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  //Getter
  get baseSalary(): number {
    return this._baseSalary;
  }

  //Setter
  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary can not be less than 0");
    }
    this._baseSalary = newSalary;
  }
}

const employee1 = new Employee("Mir", 2000);
employee1.baseSalary = 3000;
