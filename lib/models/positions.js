'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('positions', {
        id: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: '职位'
        },
        salary: {
            type: DataTypes.TEXT(),
            allowNull: true,
            comment: '薪资'
        },
        publisher: {
            type: DataTypes.BIGINT(20),
            allowNull: true,
            comment: '发布人'
        },
        jobnature: {
            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '职位类型/兼职/全职'
        },
        education: {
            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '要求'
        },

        state: {
            field: 'state',
            type: DataTypes.INTEGER(2),
            allowNull: true,
            defaultValue: 3,
            comment: '状态[1:进行中,2:一结束,3:即将开始]'
        },
        address: {
            type: DataTypes.STRING(300),
            allowNull: true,
            comment: '地址'
        },
        company: {
            type: DataTypes.STRING(300),
            allowNull: false,
            comment: '公司'
        },
        companyId: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            comment: '公司id'
        },
        desc: {
            type: DataTypes.TEXT(),
            allowNull: true,
            comment: '职位要求'
        }

    }, {
        tableName: 'position',
        comment: '职位',
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
            listPosition: function () {
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

                function listPosition(_x2, _x3) {
                    return _ref2.apply(this, arguments);
                }

                return listPosition;
            }(),
            add: function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(p) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    row = this.build(p);
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
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(p) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    _context4.next = 2;
                                    return this.findById(p.id);

                                case 2:
                                    row = _context4.sent;

                                    row.id = p.id;
                                    row.name = p.name;
                                    row.salary = p.salary;
                                    row.publisher = p.publisher;
                                    row.jobnature = p.jobnature;
                                    row.education = p.education;
                                    row.state = p.state;
                                    row.address = p.address;
                                    row.company = p.company;
                                    row.companyId = p.companyId;
                                    row.desc = p.desc;

                                    _context4.next = 16;
                                    return row.save();

                                case 16:
                                    return _context4.abrupt('return', _context4.sent);

                                case 17:
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