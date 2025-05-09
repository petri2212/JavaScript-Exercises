class Coder {

    secondLang!: String //its not obligatory

    constructor(public readonly name:string, 
               public music:string,
               private age:number,
               protected lang:string = 'Typescript'
    ){
        this.name=name
        this.age=age
        this.music=music
        this.lang=lang
    }
    public getAge(){
        return `Hello, im ${this.age}`
    }

}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())
//console.log(Dave.age) typescript error but valid javascript
//console.log(Dave.lang)

class WebDev extends Coder {
    constructor (
        public computer: string,
        name:string,
        music:string,
        age:number,
        ){
            super(name,music,age)
            this.computer = computer
    }

    public getLang(){
        return `I write ${this.lang} `
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang());
////////////////////////////////

interface Musician{
    name:string,
    instrument:string,
    play(action:string):string
}

class Guitarist implements Musician{
    name:string
    instrument:string

    constructor(name:string, instrument: string){
        this.name = name
        this.instrument=instrument
    }

    play(action:string){
        return `${this.name} ${action} the ${this.instrument}`
    }

}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));
///////////

class Peeps{
    static count:number = 0
    static getCount():number{
        return Peeps.count
    }
    public id:number
    constructor(public name:string){
        this.name=name
        this.id = ++Peeps.count
    }

}


const John = new Peeps('Johj')
const Neppi = new Peeps('Neppi')
const CArlo = new Peeps('CArlo')
const AMy = new Peeps('AMy')

console.log(John.id);
console.log(Peeps.count);



