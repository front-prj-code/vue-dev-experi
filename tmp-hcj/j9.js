// function f(a,b,cb) {
//     return cb(a+b)
// }
//
// console.log(f(1,2,function (x) {
//     console.log(x)
//     return x
// }))

var f =function (a,b,c) {
    return c(a,b)
}

console.log(f(2,3,function (x,y) {
    console.log(x+y)
    return x+y
}))