'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var service = require('../services/info');

exports.list = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
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
exports.add = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    var infoObj, info;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    infoObj = parseUser(this);
                    _context3.next = 3;
                    return service.add(infoObj);

                case 3:
                    info = _context3.sent;

                    if (info) {
                        this.body = info;
                    } else {
                        this.body = { code: 1, msg: '添加失败' };
                    }

                case 5:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, this);
}));
exports.update = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _callee4, this);
}));
function parseUser(cxt) {
    var query = cxt.query;
    var row = {};
    row.id = query.id;
    row.userId = query.userId;
    row.ocrInfoId = query.ocrInfoId;
    row.userName = query.userName;
    return row;
}