//* Partial

interface User {
  id: string;
  name: string;
  email: string;
}

const updateProfile = (id: string, data: Partial<User>) => {
  // Backend Codes
};

updateProfile("12321", { name: "Mizan" });

//* Required

interface Config {
  apiKey?: string;
  timeout?: number;
}

const initialize = (config: Required<Config>) => {
  // some logic
};

initialize({ apiKey: "sdd-121-dsd", timeout: 12134 });

//* Pick
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "ABC",
  description: "asd asdasd",
};

//* Omit
interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: number;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
  id: 1212,
  name: "Asif",
};

//* Record
type Environment = "development" | "staging" | "production";

const apiUrls: Record<Environment, string> = {
  development: "something",
  staging: "something",
  production: "Something",
};
