//* unknown
// function processValue(value: unknown) {
//   if (typeof (value == "string")) {
//     console.log(value.toUpperCase());
//   } else if (Array.isArray(value)) {
//     console.log(value.length);
//   }
// }

//* never
function throwError(message: string): never {
  throw new Error(message);
}

//* undefined & null
const y: undefined = undefined;
const z: null = null;

//* Optional Parameters and Properties

function greet(name?: string): string {
  return `Hello ${name || "stranger"}`;
}

interface IUser {
  name: string;
  age?: number;
}

//* Nullish Coalescing and Optional Chaining

const input = null;
const value = input ?? "default";
