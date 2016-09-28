'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('company', {
        id: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: '公司名称'
        },
        desc: {
            type: DataTypes.STRING(500),
            allowNull: false,
            comment: '一句简单的描述'
        },
        logo: {
            type: DataTypes.STRING(200),
            allowNull: true,
            comment: '图标'
        },
        type: {
            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '企业类型/传统公司,互联网公司等.'
        },
        process: {
            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '如上市公司/A轮'
        },
        number: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
            defaultValue: 3,
            comment: '员工数量'
        },
        address: {
            type: DataTypes.STRING(300),
            allowNull: true,
            comment: '招聘会/宣讲会地址'
        },
        introduction: {
            type: DataTypes.TEXT(),
            allowNull: true,
            comment: '企业介绍'
        },
        tag: {
            type: DataTypes.STRING(1000),
            allowNull: true,
            comment: '标签/如弹性工作,工资高.'
        }
    }, {
        tableName: 'company',
        comment: '公司/企业',
        indexes: [],
        classMethods: {
            findByName: function () {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(title) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.findAll({
                                        where: {
                                            name: {
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

                function findByName(_x) {
                    return _ref.apply(this, arguments);
                }

                return findByName;
            }(),
            listCompany: function () {
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
                                        order: 'id DESC'
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

                function listCompany(_x2, _x3) {
                    return _ref2.apply(this, arguments);
                }

                return listCompany;
            }(),
            add: function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(company) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    row = this.build(company);
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
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(cp) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    _context4.next = 2;
                                    return this.findById(cp.id);

                                case 2:
                                    row = _context4.sent;

                                    row.id = cp.id;
                                    row.name = cp.name;
                                    row.desc = cp.desc;
                                    row.logo = cp.logo;
                                    row.type = cp.type;
                                    row.process = cp.process;
                                    row.number = cp.number;
                                    row.address = cp.address;
                                    row.introduction = cp.introduction;
                                    row.tag = cp.tag;
                                    _context4.next = 15;
                                    return row.save();

                                case 15:
                                    return _context4.abrupt('return', _context4.sent);

                                case 16:
                                case 'end':
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function update(_x5) {
                    return _ref4.apply(this, arguments);
                }

                return update;
            }(),
            findById: function () {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(id) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    _context5.next = 2;
                                    return this.find({
                                        where: {
                                            id: id
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

                function findById(_x6) {
                    return _ref5.apply(this, arguments);
                }

                return findById;
            }()

        }
    });
};