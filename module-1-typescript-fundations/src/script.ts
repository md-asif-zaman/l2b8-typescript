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

const ans = addTwo(1, 2);

//* Array, Tuple & readonly modifier
const arr: string[] = ["a", "b", "c"];
const numArr: number[] = [11, 12];

const daLatLon: readonly [number, number] = [23.82, 90.42];
