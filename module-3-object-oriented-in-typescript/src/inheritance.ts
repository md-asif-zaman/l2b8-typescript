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
  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary can not be less than 0");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }
}

//* Inheritance
class Manager extends Employee {
  teamMemberCount: number;

  constructor(name: string, baseSalary: number, teamMemberCount: number) {
    super(name, baseSalary);
    this.teamMemberCount = teamMemberCount;
  }
}

const manager = new Manager("Mizan", 40000, 30);
console.log(manager.baseSalary);
