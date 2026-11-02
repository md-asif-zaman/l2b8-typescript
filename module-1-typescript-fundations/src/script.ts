//* Basic Data type
let myString: string = "Hello World";
let myNumber: number = 1212;
let myBoolean: boolean = true;
let myBigInt: bigint = 12n;
let mySymbol: symbol = Symbol();

//* Type Safe Function
const addTwo = (a: number, b: number): number => {
  return a + b;
};

//* Array modifier
const arr: string[] = ["a", "b", "c"];
const numArr: number[] = [11, 12];

//* Tuple & readonly modifier
const daLatLon: readonly [number, number] = [23.82, 90.42];

//* Optional parameters
const concatName = (firstName: string, lastName?: string): string => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};

// const ans = concatName("Asif");

//* Default parameters
const greetings = (fullName: string, greeting = "hello"): void => {
  console.log(greeting + " " + fullName);
};

// greetings("Mir");

//* Rest parameters
const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

const ans = sum(1, 2, 3, 4, 5);

const logUserAction = (
  ...args: [name: string, age: number, isActive: boolean] // add indicator in tuple
) => {
  const [name, age] = args;
  console.log(name + " is " + age);
};

logUserAction("Mir", 192, false);
