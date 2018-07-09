// arrow function的用法

class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout( () => {
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
  }
var animal = new Animal()
animal.says('hi')  //animal says hi

var addtest=x=>x+5
console.log(addtest(3))

var fun=(x, y) => {x++; y--; return x+y}
console.log(fun(4,7))

