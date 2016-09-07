var App = require('koa');
var app = new App();
var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

app.use( async function(ctx,next){
    var c = await fs.readFileAsync('./package.json','utf8');
    ctx.body = c;
    await next();
    console.log(1)
});
app.use(async function(ctx){
    var c = await fs.readFileAsync('./package.json','utf8');
    console.log(c);
})
app.listen(3000);