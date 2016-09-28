'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var User = require('../models').User;

var u = module.exports = {};

u.login = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(username, pwd) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return User.validPwd(username, pwd);

                    case 2:
                        user = _context.sent;
                        return _context.abrupt('return', user);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
u.add = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(user) {
        var r;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return User.add(user);

                    case 2:
                        r = _context2.sent;
                        return _context2.abrupt('return', r.get({ plain: true }));

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x3) {
        return _ref2.apply(this, arguments);
    };
}();