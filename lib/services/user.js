'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
u.delete = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(id) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return User.delete(id);

                    case 2:
                        _context3.t0 = _context3.sent;
                        return _context3.abrupt('return', _context3.t0 === 1);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function (_x4) {
        return _ref3.apply(this, arguments);
    };
}();
u.update = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(user) {
        var r;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return User.update(user);

                    case 2:
                        r = _context4.sent;
                        return _context4.abrupt('return', r.get({ plain: true }));

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function (_x5) {
        return _ref4.apply(this, arguments);
    };
}();
u.list = function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(page, pageSize, type) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return User.list(page, pageSize, type);

                    case 2:
                        return _context5.abrupt('return', _context5.sent);

                    case 3:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function (_x6, _x7, _x8) {
        return _ref5.apply(this, arguments);
    };
}();