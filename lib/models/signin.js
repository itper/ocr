'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('signin', {
        id: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true
        },
        code: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: '验证码'
        },
        expire: {
            type: DataTypes.TEXT(),
            allowNull: false,
            comment: '招聘信息'
        },
        userId: {
            type: DataTypes.BIGINT(20),
            allowNull: true
        }
    }, {
        tableName: 'signin',
        comment: '签到',
        indexes: [],
        classMethods: {
            findByTitle: function () {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(title) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.findAll({
                                        where: {
                                            code: {
                                                like: '%' + code + '%'
                                            }
                                        }
                                    });

                                case 2:
                                    return _context.abrupt('return', _context.sent);

                                case 3:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function findByTitle(_x) {
                    return _ref.apply(this, arguments);
                }

                return findByTitle;
            }(),
            list: function () {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(page, pageSize) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.findAll({
                                        where: {},
                                        limit: pageSize,
                                        offset: page * pageSize
                                    });

                                case 2:
                                    return _context2.abrupt('return', _context2.sent);

                                case 3:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function list(_x2, _x3) {
                    return _ref2.apply(this, arguments);
                }

                return list;
            }(),
            add: function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(code) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    row = this.build(code);
                                    _context3.next = 3;
                                    return row.save();

                                case 3:
                                    return _context3.abrupt('return', _context3.sent);

                                case 4:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function add(_x4) {
                    return _ref3.apply(this, arguments);
                }

                return add;
            }(),
            update: function () {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(c, code) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    _context4.next = 2;
                                    return this.findById(c, code.code);

                                case 2:
                                    row = _context4.sent;

                                    if (row) {
                                        _context4.next = 5;
                                        break;
                                    }

                                    return _context4.abrupt('return', null);

                                case 5:
                                    row.id = code.id;
                                    row.expire = code.expire;
                                    row.userId = code.userId;
                                    _context4.next = 10;
                                    return row.save();

                                case 10:
                                    return _context4.abrupt('return', _context4.sent);

                                case 11:
                                case 'end':
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function update(_x5, _x6) {
                    return _ref4.apply(this, arguments);
                }

                return update;
            }(),
            findById: function () {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(c, code) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    _context5.next = 2;
                                    return this.find({
                                        where: {
                                            code: code,
                                            expire: {
                                                $gt: c
                                            }
                                        }
                                    });

                                case 2:
                                    return _context5.abrupt('return', _context5.sent);

                                case 3:
                                case 'end':
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function findById(_x7, _x8) {
                    return _ref5.apply(this, arguments);
                }

                return findById;
            }()

        }
    });
};