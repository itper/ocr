'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

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
exports.update = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));
exports.delete = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, this);
}));
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

    return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
    };
}();
function createCompany(p) {
    var company = {};
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