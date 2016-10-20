'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '名称/企业用户/教师姓名'
        },
        pwd: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: '登录密码'
        },
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: '登录用户名'
        },
        avatar: {
            type: DataTypes.STRING(200),
            allowNull: true,
            comment: '头像'
        },
        email: {
            type: DataTypes.STRING(400),
            allowNull: true,
            comment: '邮箱'
        },
        type: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defauleValue: 1,
            comment: '账户类型[1:学生,2:教师,3:企业用户'
        },
        college: {
            type: DataTypes.STRING(500),
            allowNull: true,
            comment: '学校'
        },
        phone: {

            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '联系电话'
        },
        age: {

            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '学生年龄'
        },
        sex: {

            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '学生性别'
        },
        specialty: {

            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '学生专业'
        },
        page: {

            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '学生/老师/企业网站'
        },
        desc: {

            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '学生/老师/企业简介'
        },
        address: {

            type: DataTypes.STRING(100),
            allowNull: true,
            comment: '学生/教师/企业/地址'
        },
        company: {
            type: DataTypes.STRING(200),
            allowNull: true,
            comment: '所在单位(企业用户)'
        },
        companyId: {
            type: DataTypes.BIGINT(20),
            allowNull: true,
            comment: ''
        }

    }, {
        tableName: 'user',
        comment: 'all user',
        indexes: [{
            unique: true,
            fields: ['username']
        }],
        classMethods: {
            getUserByUsername: function () {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(name) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.find({ where: { username: name } });

                                case 2:
                                    return _context.abrupt('return', _context.sent);

                                case 3:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function getUserByUsername(_x) {
                    return _ref.apply(this, arguments);
                }

                return getUserByUsername;
            }(),
            getUserByName: function () {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(name) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.findAll({ where: { name: name } });

                                case 2:
                                    return _context2.abrupt('return', _context2.sent);

                                case 3:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function getUserByName(_x2) {
                    return _ref2.apply(this, arguments);
                }

                return getUserByName;
            }(),
            list: function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(page, pageSize, type) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.next = 2;
                                    return this.findAll({
                                        where: {
                                            type: type
                                        },
                                        limit: pageSize,
                                        offset: page * pageSize,
                                        order: 'id DESC'
                                    });

                                case 2:
                                    return _context3.abrupt('return', _context3.sent);

                                case 3:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function list(_x3, _x4, _x5) {
                    return _ref3.apply(this, arguments);
                }

                return list;
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

                function _delete(_x6) {
                    return _ref4.apply(this, arguments);
                }

                return _delete;
            }(),
            add: function () {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(user) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    user = this.build(user);
                                    _context5.next = 3;
                                    return user.save();

                                case 3:
                                    return _context5.abrupt('return', _context5.sent);

                                case 4:
                                case 'end':
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function add(_x7) {
                    return _ref5.apply(this, arguments);
                }

                return add;
            }(),
            validPwd: function () {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(username, pwd) {
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    _context6.next = 2;
                                    return this.find({ where: { username: username, pwd: pwd } });

                                case 2:
                                    return _context6.abrupt('return', _context6.sent);

                                case 3:
                                case 'end':
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function validPwd(_x8, _x9) {
                    return _ref6.apply(this, arguments);
                }

                return validPwd;
            }(),
            update: function () {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(user) {
                    var row;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    _context7.next = 2;
                                    return this.getUserByUsername(user.username);

                                case 2:
                                    row = _context7.sent;

                                    row.name = user.name;
                                    row.pwd = user.pwd;
                                    row.avatar = user.avatar;
                                    row.email = user.email;
                                    row.type = user.type;
                                    row.school = user.school;
                                    row.phone = user.phone;
                                    row.age = user.age;
                                    row.sex = user.sex;
                                    row.specialty = user.specialty;
                                    row.page = user.page;
                                    row.desc = user.desc;
                                    row.address = user.address;
                                    _context7.next = 18;
                                    return row.save();

                                case 18:
                                    return _context7.abrupt('return', _context7.sent);

                                case 19:
                                case 'end':
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                function update(_x10) {
                    return _ref7.apply(this, arguments);
                }

                return update;
            }()
        }
    });
};