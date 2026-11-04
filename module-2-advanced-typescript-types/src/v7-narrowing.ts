//* typeof
let x = [123];

//* Type Guard
const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

//* Truthiness
type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "Mir",
  address: {
    street: "ABC",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
    return;
  }
  throw new Error("User not Found");
};

//* Some Caveat of Type Guard

const printAll = (x: string | string[] | null) => {
  // x not null & type of x is array
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log("");
  }
};

// printAll(["Aasdd", "asdd", "asddsard"]);

//* Equality
const compare = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x, y);
  }
};

const printAllUsingEquality = (x: string | string[] | null) => {
  if (x != null) {
    // for string[]
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
      }
    }
    // for string
    console.log(x);
    return;
  }
  // for null
  console.log("");
};

//* in operator
interface Bird {
  fly: () => void;
}

interface Fish {
  swim: () => void;
}

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};

//* instanceof check

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }
  const date = new Date(x);
  console.log(date.toISOString());
};

//* Discriminated union
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

const getArea = (shape: Circle | Square) => {
  if (shape.kind === "circle") {
    console.log(shape.radius);
    return;
  }
  console.log(shape.sideLength);
};
