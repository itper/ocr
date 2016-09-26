var Koa = require('koa');
var http = require('http');
var auth = require('../middleware/auth');
var router = require('../routes/web');
var session = require('koa-session');
const convert = require('koa-convert');

var app = new Koa();


app.keys = ['itperchen'];
app.use(convert(session(app)));
app.use(router.routes());
module.exports = app;