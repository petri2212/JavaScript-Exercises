//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

type UserId = stringOrNumber

//Literal types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void =>{
    console.log(message)
}

logMsg('hello')
logMsg(add(2,3))

let subtract = function (c:number, d: number):number{
    return c-d
}

type mathFunction = (a: number, b: number) => number
/*interface mathFunction {
     (a: number, b: number): number
    }
*/
let moltiply:mathFunction = function(c,d){
    return c*d
}

logMsg(moltiply(2,2))

//OPTIONAL PARAMETERS
const addAll = (a:number, b: number, c?: number): 
number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b 


}

const sumAll = (a:number = 10, b: number, c: number = 2): 
number => {
        return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(undefined,3))

//Rest Parameters,rest of the parameters ...nums
const total = (a:number , ...nums: number[]): number =>{
    return a + nums.reduce((prev,curr) => prev + curr )
}

logMsg(total(101 , 2 ,3))

const createError = (errMsg:string):never =>{
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while(true){
        i++
        if (i >100) break
    }
}
const isNumber = (value : any):boolean =>{
    return typeof value ==='number'
    ?true : false

}
//use the never type
const numberOrString = (value: number|string):
string =>{
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('This should never happen!!')

}



