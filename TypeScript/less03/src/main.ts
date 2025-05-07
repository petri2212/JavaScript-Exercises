let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bbands: string[] = []
bbands.push('carlo', 's')

//
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

//mixed = myTuple

//object
let myObject: object
myObject = []
console.log(typeof myObject)
myObject = bbands
myObject = {}

const exampleObj = {
    prop1: 'dave',
    prop2: true,
}

exampleObj.prop2 = false

//interface and type made the same thing, when you use type u have to put = before {}

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}


let evh: Guitarist = {
    name: 'evie',
    active: false,
    albums: [1984, 5150, 'fgwga']
}
let jp: Guitarist = {
    name: 'Jimyy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp

const greetGuitarist = (guitars: Guitarist) => {
    if (guitars.name) {
        return `Hello ${guitars.name.toUpperCase()}! `
    }
    return 'Hello!'
}



console.log(greetGuitarist(jp))


//ENUMS

enum Grade{
    U = 1, 
    D,
    C,
    B,
    A,
}

console.log(Grade.U)




