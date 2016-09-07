var fs = require('fs');
var Promise = require('bluebird');
var fetch = require('node-fetch');
Promise.promisifyAll(fs);
async function read(){
    var content = await fs.readFileAsync('1','utf8');
    await fs.writeFileAsync('./2',content);

}
read();