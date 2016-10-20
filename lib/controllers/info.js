'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var service = require('../services/info');

exports.listInfo = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
        var list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return service.listInfo(parseInt(ctx.query.page || 0), parseInt(ctx.query.pageSize || 20), ctx.query.type || 1);

                    case 2:
                        list = _context.sent;

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
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();
exports.find = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
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

    return function (_x2) {
        return _ref3.apply(this, arguments);
    };
}();
exports.add = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx) {
        var infoObj, info;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        infoObj = createOCR(ctx.request.body);
                        _context4.next = 3;
                        return service.add(infoObj);

                    case 3:
                        info = _context4.sent;

                        if (info) {
                            ctx.body = { code: 0, data: info };
                        } else {
                            ctx.body = { code: 1, msg: '添加失败' };
                        }

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function (_x3) {
        return _ref4.apply(this, arguments);
    };
}();
exports.update = function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(ctx) {
        var r;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return service.update(createOCR(ctx.request.body));

                    case 3:
                        r = _context5.sent;

                        ctx.body = { code: 0, data: r, msg: 'success' };
                        _context5.next = 11;
                        break;

                    case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5['catch'](0);

                        ctx.body = { code: 1, msg: 'error', data: _context5.t0 };
                        console.log(_context5.t0);

                    case 11:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 7]]);
    }));

    return function (_x4) {
        return _ref5.apply(this, arguments);
    };
}();
function createOCR(query) {
    var row = {};
    row.title = query.title;
    row.id = query.id;
    row.content = query.content;
    row.publisher = query.publisher || 1;
    row.fromDate = query.fromDate;
    row.toDate = query.toDate;
    row.address = query.address;
    row.company = query.company;
    return row;
}