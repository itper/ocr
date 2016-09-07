var Promise = require('bluebird');
var fetch = require('node-fetch');

async function read(){
    var r = await fetch('http://baidu.com');
    console.log(await r.text());
}
read();