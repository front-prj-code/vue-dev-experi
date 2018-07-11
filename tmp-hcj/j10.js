//构造函数
function Obj(name,age,sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.sayHi=function () {
        console.log("every body, I am "+this.name+";"+"今年"+this.age);
    }
}

//实例化对象
s1=new Obj("jiji",18,"nan");
s2=new Obj("huahua",23,"女");

//对象方法的调用
s1.sayHi();