'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Company = require('../models').Company;

var u = module.exports = {};

u.list = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(page, pageSize) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return Company.listCompany(page, pageSize);

                    case 2:
                        return _context.abrupt('return', _context.sent);

                    case 3:
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
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(company) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return Company.add(company);

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
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
u.update = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(company) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return Company.update(company);

                    case 2:
                        _context3.t0 = { plain: true };
                        return _context3.abrupt('return', _context3.sent.get(_context3.t0));

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
u.delete = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return Company.delete(id);

                    case 2:
                        _context4.t0 = _context4.sent;
                        return _context4.abrupt('return', _context4.t0 === 1);

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