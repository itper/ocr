function* test(){
    yield 1;
    yield 2;
    return 3;
}
function* test1(){
    var a = yield * test();
    console.log(a);
}

var t = test1();
console.log(t.next());
console.log(t.next());
console.log(t.next());


async function t1 (){
    await 1;
    await 2;
    await 3;
    return 10;
}
async function t2(){
    var a = await t1();
    console.log(a);
}
// t2();