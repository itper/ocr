'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('questionnaire', {
        id: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true
        },
        parentId: {
            type: DataTypes.BIGINT(20),
            allowNull: true,
            comment: '问卷和问卷内容共享'
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: '问卷信息标题'
        },
        content: {
            type: DataTypes.TEXT(),
            allowNull: false,
            comment: '问卷内容信息'
        },
        publisher: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            comment: '问卷发布者'
        },
        fromDate: {
            field: 'from_date',
            type: DataTypes.INTEGER(11),
            allowNull: false,
            comment: '问卷开始时间'
        },
        toDate: {
            field: 'to_date',
            type: DataTypes.INTEGER(11),
            allowNull: false,
            comment: '问卷结束时间'
        },
        state: {
            field: 'state',
            type: DataTypes.INTEGER(2),
            allowNull: false,
            defaultValue: 3,
            comment: '状态[1:进行中,2:一结束,3:即将开始]'
        },
        company: {
            type: DataTypes.STRING(300),
            allowNull: false,
            comment: '公司'
        }
    }, {
        tableName: 'questionnaire',
        comment: '问卷',
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
                                            title: {
                                                like: '%' + title + '%'
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
                                        offset: page * pageSize,
                                        order: 'fromDate DESC'
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
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ocr) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    row = this.build(ocr);
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
            delete: function () {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(id) {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    _context4.next = 2;
                                    return this.destroy({
                                        where: {
                                            id: id
                                        }
                                    });

                                case 2:
                                    return _context4.abrupt('return', _context4.sent);

                                case 3:
                                case 'end':
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function _delete(_x5) {
                    return _ref4.apply(this, arguments);
                }

                return _delete;
            }(),
            update: function () {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(ocr) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    _context5.next = 2;
                                    return this.findById(ocr.id);

                                case 2:
                                    row = _context5.sent;

                                    row.title = ocr.title;
                                    row.content = ocr.content;
                                    row.publisher = ocr.publisher;
                                    row.fromDate = ocr.fromDate;
                                    row.toDate = ocr.toDate;
                                    row.address = ocr.address;
                                    row.company = ocr.company;
                                    _context5.next = 12;
                                    return row.save();

                                case 12:
                                    return _context5.abrupt('return', _context5.sent);

                                case 13:
                                case 'end':
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function update(_x6) {
                    return _ref5.apply(this, arguments);
                }

                return update;
            }(),
            findById: function () {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(id) {
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    _context6.next = 2;
                                    return this.find({
                                        where: {
                                            id: id
                                        }
                                    });

                                case 2:
                                    return _context6.abrupt('return', _context6.sent);

                                case 3:
                                case 'end':
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function findById(_x7) {
                    return _ref6.apply(this, arguments);
                }

                return findById;
            }()

        }
    });
};