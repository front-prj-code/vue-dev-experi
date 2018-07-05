/**
 * Created by dell on 2018/7/4.
 */
"use static"

function async(a,b,c) {
    setTimeout(function(){
        c(a+b)
    },200)
}

async(1,2,function (res) {
    console.log(res) 
})