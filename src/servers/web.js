var Koa = require('koa');
var http = require('http');
var auth = require('../middleware/auth').default;
var router = require('../routes/web');
var SessionStore = require('../global/sessionStore');
var session = require('koa-session2').default;
const convert = require('koa-convert');
var bodyParser = require('koa-bodyparser');
var app = new Koa();
app.use(bodyParser());
var allowList = [
    'http://manager.ocr.itper.xyz',
    'http://h5.ocr.itper.xyz'
]
app.use(async function(ctx,next){
    ctx.set('Access-Control-Allow-Origin',ctx.req.headers.origin);
    ctx.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    ctx.set("Access-Control-Allow-Credentials",true);
    await next();
});
app.use(session({store:SessionStore,key:SessionStore.key}));
app.use(auth);
app.use(router.routes());
app.use(router.allowedMethods());
module.exports = app;