'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var signinService = require('../servers/signin');
exports.request = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.valid = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var code, r;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    code = this.query.code;
                    _context2.next = 3;
                    return signinService.valid(code);

                case 3:
                    r = _context2.sent;

                    if (r) {
                        this.body = { code: 0, msg: 'success' };
                    } else {
                        this.body = { code: 1, msg: '验证码无效' };
                    }

                case 5:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));