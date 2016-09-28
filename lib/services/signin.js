'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by chendi on 16/9/26.
 */
var uuid = require('node-uuid');
var SigninCode = require('../models').Signin;
var expire = 30;
exports.create = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var code;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    code = uuid.v1().split('-')[0];
                    //创建一个有过期时间的二维码

                    _context.next = 3;
                    return SigninCode.add({ expire: currentDate() + expire, code: code });

                case 3:
                    return _context.abrupt('return', _context.sent);

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));
exports.valid = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(code, userId, ocrId) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return SigninCode.update(currentDate(), { code: code, expire: 1000000000, ocrId: ocrId, userId: userId });

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();
exports.hasSignin = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    var row;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return SigninCode.getCode(userId, ocrId);

                case 2:
                    row = _context3.sent;

                case 3:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, this);
}));
function currentDate() {
    return parseInt(Date.now() / 1000);
}