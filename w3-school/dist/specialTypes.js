"use strict";
//* unknown
// function processValue(value: unknown) {
//   if (typeof (value == "string")) {
//     console.log(value.toUpperCase());
//   } else if (Array.isArray(value)) {
//     console.log(value.length);
//   }
// }
//* never
function throwError(message) {
    throw new Error(message);
}
//* undefined & null
const y = undefined;
const z = null;
//* Optional Parameters and Properties
function greet(name) {
    return `Hello ${name || "stranger"}`;
}
//* Nullish Coalescing and Optional Chaining
const input = null;
const value = input ?? "default";
