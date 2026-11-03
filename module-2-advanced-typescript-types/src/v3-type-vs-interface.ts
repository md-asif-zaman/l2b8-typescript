//* type alias vs interface

// TODO: type alias
type Id = number;

type Role = "admin" | "member";

interface User {
  name: string;
  id: Id;
  role: Role;
}

const user: User = {
  id: 123,
  name: "Abc",
  role: "admin",
};

// TODO: interface extends

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  species: "Felix Catus",
  breed: "Persian",
};

//TODO: Type intersection
type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  //? "&" symbol to perform intersection
  model: string;
};

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
};

//TODO: Merge types in interface
interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee: IEmployee = {
  id: 1,
  name: "Asif",
};
