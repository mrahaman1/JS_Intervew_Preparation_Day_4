//scopes:
// 1.Global Scope:
var a= 10;
function fun(){
    console.log("Hello");
}
fun();
// 2.Local or Function Scope:
function add(){
    var b=24;
    console.log(b);
}
// 3.Block Scope:
{
    let abc=123;
    console.log(abc);
}

//null and undefined
var x;
console.log(x);

var y=null;
console.log(y);

//promises
var promise = new Promise(function(resolve,reject){
    const x="promise1";
    const y="promise2";
    if(x===y){
        resolve();
    }
    else{
        reject();
    }
})
promise.then(()=>{console.log("Success")}).catch(()=>{console.log("Failed")})

//promise chaining

new Promise(function(resolve,reject){
    setTimeout(()=>{resolve(1)},1000);
}).then(function(result){
    console.log(result);
    return result * 2;
}).then(function(result){
    console.log(result);
    return result * 4;
})
.then(function(result){
    console.log(result);
    return result * 6;
})


//pure functions
function calculation(num){
    console.log(num * 5);
}
calculation(5);