'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var OCRInfo = require('../models').OCRInfo;

module.exports = {
    listInfo: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(page, pageSize) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return OCRInfo.listOCR(page, pageSize);

                        case 2:
                            return _context.abrupt('return', _context.sent);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function listInfo(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return listInfo;
    }(),
    findByTitle: function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return OCRInfo.findByTitle(title);

                        case 2:
                            return _context2.abrupt('return', row = _context2.sent);

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function findByTitle() {
            return _ref2.apply(this, arguments);
        }

        return findByTitle;
    }(),
    add: function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(info) {
            var row;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return OCRInfo.addOCR(info);

                        case 2:
                            row = _context3.sent;
                            return _context3.abrupt('return', row.get({ plain: true }));

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function add(_x3) {
            return _ref3.apply(this, arguments);
        }

        return add;
    }(),
    update: function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(info) {
            var row;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return OCRInfo.update(info);

                        case 2:
                            row = _context4.sent;
                            return _context4.abrupt('return', row.get({ plain: true }));

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function update(_x4) {
            return _ref4.apply(this, arguments);
        }

        return update;
    }()

};