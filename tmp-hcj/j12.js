function Student(name,age,sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.sayHi=function () {
        console.log('你好啊')
    }
}

function f1(stu) {
    stu.name="xxxx"
}

function f2(stu) {
    stu=new  Student()；
    stu.name="xxxx"
}

s=new Student('Jack',32,'男');
// f1(s);
f2(s);
console.log(s.name)