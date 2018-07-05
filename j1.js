// let\const\class 使用方法  extends\super\this

// 'use static'
// for(var i=0;i<5;i++){}
// console.log(i)

// for(var i=0;i<5;i++){
// console.log(i)}

// for(let i=0;i<5;i++){
// console.log(i)}

class Animal {
    constructor(){
        this.type='animal'
    }
    says(say){
        return this.type+' '+'says'+' '+say
    }
}

let animal=new Animal()
console.log(animal.says('hi'))

class Cat extends Animal{
    constructor(){
        super()
        this.type='cat'
    }
}
let cat=new Cat()
console.log(cat.says('i am cat'))


