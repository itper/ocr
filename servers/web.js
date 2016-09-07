var Koa = require('koa');
var http = require('http');
var auth = require('../middleware/auth');
var router = require('../routes/web');

var app = new Koa();


app.use(router.routes());
module.exports = app;