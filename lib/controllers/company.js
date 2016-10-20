'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var service = require('../services/company');
exports.add = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        var company;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        company = createCompany(ctx.request.body);
                        _context.next = 3;
                        return service.add(company);

                    case 3:
                        company = _context.sent;

                        if (company) {
                            ctx.body = {
                                code: 0,
                                data: {
                                    company: company
                                }
                            };
                        } else {
                            ctx.body = {
                                code: 1,
                                data: null
                            };
                        }

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
}();
exports.update = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx) {
        var r;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return service.update(createCompany(ctx.request.body));

                    case 3:
                        r = _context2.sent;

                        ctx.body = { code: 0, data: r, msg: 'success' };
                        _context2.next = 11;
                        break;

                    case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2['catch'](0);

                        ctx.body = { code: 1, msg: 'error', data: _context2.t0 };
                        console.log(_context2.t0);

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 7]]);
    }));

    return function (_x3) {
        return _ref2.apply(this, arguments);
    };
}();
exports.delete = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx) {
        var r;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return service.delete(parseInt(ctx.query.id));

                    case 2:
                        r = _context3.sent;

                        ctx.body = {
                            code: r ? 0 : 1,
                            data: null
                        };

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
exports.list = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
        var list;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return service.list(parseInt(ctx.query.page || 0), parseInt(ctx.query.pageSize || 20));

                    case 2:
                        list = _context4.sent;

                        if (list) {
                            ctx.body = {
                                code: 0,
                                data: {
                                    list: list
                                }
                            };
                        } else {
                            ctx.body = {
                                code: 1,
                                data: null
                            };
                        }

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
    };
}();
function createCompany(p) {
    var company = {};
    company.id = p.id;
    company.name = p.name;
    company.desc = p.desc;
    company.logo = p.logo;
    company.type = p.type;
    company.process = p.process;
    company.number = p.number;
    company.address = p.address;
    company.introduction = p.introduction;
    company.tag = p.tag;
    return company;
}