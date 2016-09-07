async function test(){
    console.log(0);
    await t1();
    console.log(2);
}

function t1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(1);
            resolve(1);
        },1000);
    })
}
test();
//0,1,2