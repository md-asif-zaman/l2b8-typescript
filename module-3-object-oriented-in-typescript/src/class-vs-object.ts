class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const asif = new Employee("Asif", 22000);
const mir = new Employee("Mir", 30000);
