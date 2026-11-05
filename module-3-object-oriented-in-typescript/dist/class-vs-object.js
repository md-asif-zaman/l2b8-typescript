class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const asif = new Employee("Asif", 22000);
const mir = new Employee("Mir", 30000);
export {};
//* Class short form
// class Employee {
//   constructor(
//     public name: string,
//     public _baseSalary: number,
//   ) {}
// }
