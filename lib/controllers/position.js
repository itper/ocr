'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var service = require('../services/position');
//添加职位
exports.add = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
        var p;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        p = createPosition(ctx.request.body);
                        _context.next = 3;
                        return service.add(p);

                    case 3:
                        p = _context.sent;

                        if (p) {
                            ctx.body = {
                                code: 0,
                                data: {
                                    company: p
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

    return function (_x) {
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
                        return service.update(createPosition(ctx.request.body));

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

    return function (_x2) {
        return _ref2.apply(this, arguments);
    };
}();
//拉去职位
exports.list = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx) {
        var list;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return service.list(parseInt(ctx.query.page || 0), parseInt(ctx.query.pageSize || 20));

                    case 2:
                        list = _context3.sent;

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
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function (_x3) {
        return _ref3.apply(this, arguments);
    };
}();
//删除职位
exports.delete = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx) {
        var r;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return service.delete(parseInt(ctx.query.id));

                    case 2:
                        r = _context4.sent;

                        ctx.body = {
                            code: r ? 0 : 1,
                            data: null
                        };

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function (_x4) {
        return _ref4.apply(this, arguments);
    };
}();
//通过公司Id获取招聘信息.
exports.get = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _callee5, this);
}));
//
exports.favorite = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _callee6, this);
}));
exports.deleteFavorite = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                case 'end':
                    return _context7.stop();
            }
        }
    }, _callee7, this);
}));
function createPosition(p) {
    var position = {};
    position.id = p.id;
    position.name = p.name;
    position.salary = p.salary;
    position.publisher = p.publisher;
    position.jobnature = p.jobnature;
    position.education = p.education;
    position.state = p.state;
    position.address = p.address;
    position.company = p.company;
    position.companyId = p.companyId;
    position.desc = p.desc;
    return position;
}