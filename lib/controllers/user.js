'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var userService = require('../services/user');
var signinService = require('../services/signin');

exports.userlist = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        var list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return userService.list(parseInt(ctx.query.page || 0), parseInt(ctx.query.pageSize || 20), ctx.query.type || 1);

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

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
exports.delete = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
        var r;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return userService.delete(parseInt(ctx.query.id));

                    case 2:
                        r = _context2.sent;

                        ctx.body = {
                            code: r ? 0 : 1,
                            data: null
                        };

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
//登录接口
exports.login = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(cxt, next) {
        var username, pwd, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        username = cxt.request.body.username;
                        pwd = cxt.request.body.pwd;

                        if (!validNameAndPwd(cxt.request.body)) {
                            _context3.next = 5;
                            break;
                        }

                        this.body = {
                            code: 1,
                            msg: 'paramError'
                        };
                        return _context3.abrupt('return');

                    case 5:
                        if (!(cxt.session && cxt.session.user)) {
                            _context3.next = 8;
                            break;
                        }

                        cxt.body = { code: 0, msg: '已登录', data: cxt.session.user };
                        return _context3.abrupt('return');

                    case 8:
                        user = void 0;
                        _context3.prev = 9;
                        _context3.next = 12;
                        return userService.login(username, pwd);

                    case 12:
                        user = _context3.sent;
                        _context3.next = 18;
                        break;

                    case 15:
                        _context3.prev = 15;
                        _context3.t0 = _context3['catch'](9);

                        console.log(_context3.t0);

                    case 18:
                        if (!user) {
                            _context3.next = 22;
                            break;
                        }

                        cxt.body = { code: 0, msg: 'success', data: user };
                        cxt.session.user = user;
                        return _context3.abrupt('return');

                    case 22:
                        cxt.status = 200;
                        cxt.body = { code: 1, msg: '登录失败.' };

                    case 24:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[9, 15]]);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();
exports.valid = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(cxt) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:

                        if (cxt.session && cxt.session.user) {
                            cxt.body = { code: 0, msg: '已登录', data: cxt.session.user };
                        } else {
                            cxt.body = { code: 1, msg: '未登录' };
                        }

                    case 1:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function (_x7) {
        return _ref4.apply(this, arguments);
    };
}();
function validNameAndPwd(p) {
    return !p.username || !p.pwd;
}
//登出接口
exports.logout = function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(cxt) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        if (!(cxt.session && cxt.session.user)) {
                            _context5.next = 4;
                            break;
                        }

                        cxt.session = null;
                        cxt.body = { code: 0, msg: '退出成功' };
                        return _context5.abrupt('return');

                    case 4:
                        cxt.body = { code: 0, msg: '未登录' };

                    case 5:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function (_x8) {
        return _ref5.apply(this, arguments);
    };
}();
//注册
exports.add = function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(cxt) {
        var r;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        if (!validNameAndPwd(cxt.request.body)) {
                            _context6.next = 3;
                            break;
                        }

                        cxt.body = {
                            code: 1,
                            msg: 'paramError'
                        };
                        return _context6.abrupt('return');

                    case 3:
                        _context6.prev = 3;
                        _context6.next = 6;
                        return userService.add(createUser(cxt.request.body));

                    case 6:
                        r = _context6.sent;

                        cxt.body = { code: 0, data: r, msg: 'success' };
                        _context6.next = 13;
                        break;

                    case 10:
                        _context6.prev = 10;
                        _context6.t0 = _context6['catch'](3);

                        cxt.body = { code: 1, msg: 'error', data: _context6.t0 };

                    case 13:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this, [[3, 10]]);
    }));

    return function (_x9) {
        return _ref6.apply(this, arguments);
    };
}();
//更新
exports.update = function () {
    var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(cxt) {
        var r;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.prev = 0;
                        _context7.next = 3;
                        return userService.update(createUser(cxt.request.body));

                    case 3:
                        r = _context7.sent;

                        cxt.body = { code: 0, data: r, msg: 'success' };
                        _context7.next = 11;
                        break;

                    case 7:
                        _context7.prev = 7;
                        _context7.t0 = _context7['catch'](0);

                        cxt.body = { code: 1, msg: 'error', data: _context7.t0 };
                        console.log(_context7.t0);

                    case 11:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this, [[0, 7]]);
    }));

    return function (_x10) {
        return _ref7.apply(this, arguments);
    };
}();
exports.signin = function () {
    var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(ctx) {
        var code, r;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        code = ctx.query.code;
                        _context8.next = 3;
                        return signinService.valid(code, 1);

                    case 3:
                        r = _context8.sent;

                        if (r) {
                            ctx.body = { code: 0, msg: 'success' };
                        } else {
                            ctx.body = { code: 1, msg: '验证码无效' };
                        }

                    case 5:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    return function (_x11) {
        return _ref8.apply(this, arguments);
    };
}();
exports.createCode = function () {
    var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(ctx) {
        var code;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return signinService.create();

                    case 2:
                        code = _context9.sent;

                        ctx.body = { code: 0, msg: '', data: { code: code } };

                    case 4:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));

    return function (_x12) {
        return _ref9.apply(this, arguments);
    };
}();
function createUser(p) {
    var user = {};
    user.username = p.username;
    user.name = p.name || '';
    user.pwd = p.pwd || '';
    user.avatar = p.avatar || '';
    user.email = p.email || '';
    user.type = p.type || 1;
    user.school = p.school || '';
    user.phone = p.phone || '';
    user.age = p.age || '';
    user.sex = p.sex || '';
    user.specialty = p.specialty || '';
    user.page = p.page || '';
    user.desc = p.desc || '';
    user.address = p.address || '';
    return user;
}