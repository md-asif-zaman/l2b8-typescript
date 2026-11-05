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
class Manager extends Employee {
    teamMemberCount;
    constructor(name, baseSalary, teamMemberCount) {
        super(name, baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
}
const manager = new Manager("Mizan", 40000, 30);
console.log(manager.baseSalary);
export {};
