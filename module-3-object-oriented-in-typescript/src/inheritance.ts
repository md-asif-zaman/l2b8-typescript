class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
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
// class Manager extends Employee {
//   teamMemberCount: number;

//   constructor(name: string, _baseSalary: number, teamMemberCount: number) {
//     super(name, _baseSalary);
//     this.teamMemberCount = teamMemberCount;
//   }
// }

class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people`;
  }

  describeManager(): string {
    return `${this.name} earns ${this._baseSalary} people`;
  }
}

const manager = new Manager("Mizan", 40000, 30);
