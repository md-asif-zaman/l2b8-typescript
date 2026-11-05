class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    //Getter
    get baseSalary() {
        return this._baseSalary;
    }
    //Setter
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be less than 0");
        }
        this._baseSalary = newSalary;
    }
    describe() {
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
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name} earns ${this._baseSalary} people`;
    }
}
const manager = new Manager("Mizan", 40000, 30);
export {};
