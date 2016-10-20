'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Koa = require('koa');
var http = require('http');
var auth = require('../middleware/auth').default;
var router = require('../routes/web');
var session = require('koa-session2').default;
var convert = require('koa-convert');
var bodyParser = require('koa-bodyparser');
var app = new Koa();
app.use(bodyParser());
var allowList = ['http://manager.ocr.itper.xyz', 'http://h5.ocr.itper.xyz'];
app.use(function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        ctx.set('Access-Control-Allow-Origin', ctx.req.headers.origin);
                        ctx.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
                        ctx.set("Access-Control-Allow-Credentials", true);
                        _context.next = 5;
                        return next();

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());
app.use(session());
app.use(auth);
app.use(router.routes());
app.use(router.allowedMethods());
module.exports = app;