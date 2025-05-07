"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bbands = [];
bbands.push('carlo', 's');
//
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
//mixed = myTuple
//object
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bbands;
myObject = {};
const exampleObj = {
    prop1: 'dave',
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: 'evie',
    active: false,
    albums: [1984, 5150, 'fgwga']
};
let jp = {
    name: 'Jimyy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
const greetGuitarist = (guitars) => {
    if (guitars.name) {
        return `Hello ${guitars.name.toUpperCase()}! `;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
//ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
