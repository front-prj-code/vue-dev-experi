/**
 * Created by YangShun on 2018/7/11.
 */


// function timeout(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms,'done');
//     });
// }
//
// timeout(3000).then((value)=>{
//     console.log(value);
// });

function f(a,b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(a+b)
        },200)
    })
}

f(1,3)
    .then(function (res) {
        if (res>2){
            console.log("math");
            return f(res,2)
        } 
    })
    .then(function (res) {
        if (res>4){
            console.log("hello")
        }
    })