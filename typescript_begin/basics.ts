// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More Complex types

// Arrays of string
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};
// let person: any;
person = {
  name: "Max",
  age: 32,
};

// array objekata
let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React";
// course = 1231;

// Union types

// string or number
let course1: string | number = "React";
course1 = 1231;

// type alieses

// definisemo tipove
type Person = {
  name: string;
  age: number;
};
let person1: Person;
let person2: Person[];

// functions & types

function add1(a: number, b: number) {
  return a + b;
}

// function add1(a: number, b: number): number | string {
//   return a + b;
// }

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updateArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["string", "b"], "d");

// updateArray[0].split("");
stringArray[0].split("");
