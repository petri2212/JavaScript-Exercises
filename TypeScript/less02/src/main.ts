let myName: string = 'Dava';
let meaningOfLife : number;
let isLoading: boolean;
let album: string | number; //union type

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 1

const sum = (a: number, b: string) => {
    return a + b;
}

let postId : string | number
let isActive: number | boolean |string

let re: RegExp = /\w+/g; //regular expression, when you covert a file in .ts