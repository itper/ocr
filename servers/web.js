var Koa = require('koa');
var http = require('http');
var auth = require('../middleware/auth');
var router = require('../routes/web');
var session = require('koa-session2').default;
const convert = require('koa-convert');
var bodyParser = require('koa-bodyparser');
var app = new Koa();
app.use(bodyParser());
app.use(async function(ctx,next){
    ctx.set('Access-Control-Allow-Origin',"http://localhost:3000");
    ctx.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    ctx.set("Access-Control-Allow-Credentials",true);
    await next();
});
app.use(session());
app.use(router.routes());
app.use(router.allowedMethods());
module.exports = app;