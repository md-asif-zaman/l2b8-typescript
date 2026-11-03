//* Top Types
let helloWorld = "Hello World";
helloWorld = 123;
let something = "hello World";
//* Core Types
let something2;
const num = 123;
something2 = num;
let someStatus;
let status = "pending";
someStatus = status;
const currentUser = null;
//* Unit Type
const greet = () => {
    console.log("Hello World");
};
//* Unit Sub Type
const anotherGreet = () => {
    console.log("Hello World");
};
//* Bottom Type
let getError = (msg) => {
    throw new Error(msg);
};
const x = getError("ABC");
export {};
