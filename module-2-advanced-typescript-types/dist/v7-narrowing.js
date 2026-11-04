//* typeof
let x = [123];
//* Type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: "Mir",
    address: {
        street: "ABC",
    },
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("User not Found");
};
//* Some Caveat of Type Guard
const printAll = (x) => {
    // x not null & type of x is array
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
    }
};
// printAll(["Aasdd", "asdd", "asddsard"]);
//* Equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printAllUsingEquality = (x) => {
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
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
//* instanceof check
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
        return;
    }
    console.log(shape.sideLength);
};
export {};
