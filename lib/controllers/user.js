'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var userService = require('../services/user');
var signinService = require('../services/signin');

//登录接口
exports.login = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(cxt, next) {
        var username, pwd, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        username = cxt.request.body.username;
                        pwd = cxt.request.body.pwd;

                        if (!validNameAndPwd(cxt.request.body)) {
                            _context.next = 5;
                            break;
                        }

                        this.body = {
                            code: 1,
                            msg: 'paramError'
                        };
                        return _context.abrupt('return');

                    case 5:
                        if (!(cxt.session && cxt.session.user)) {
                            _context.next = 8;
                            break;
                        }

                        cxt.body = { code: 0, msg: '已登录', data: cxt.session.user };
                        return _context.abrupt('return');

                    case 8:
                        user = void 0;
                        _context.prev = 9;
                        _context.next = 12;
                        return userService.login(username, pwd);

                    case 12:
                        user = _context.sent;
                        _context.next = 18;
                        break;

                    case 15:
                        _context.prev = 15;
                        _context.t0 = _context['catch'](9);

                        console.log(_context.t0);

                    case 18:
                        if (!user) {
                            _context.next = 22;
                            break;
                        }

                        cxt.body = { code: 0, msg: 'success', data: user };
                        cxt.session.user = user;
                        return _context.abrupt('return');

                    case 22:
                        cxt.status = 200;
                        cxt.body = { code: 1, msg: '登录失败.' };

                    case 24:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[9, 15]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
exports.valid = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(cxt) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:

                        if (cxt.session && cxt.session.user) {
                            cxt.body = { code: 0, msg: '已登录', data: cxt.session.user };
                        } else {
                            cxt.body = { code: 1, msg: '未登录' };
                        }

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x3) {
        return _ref2.apply(this, arguments);
    };
}();
function validNameAndPwd(p) {
    return !p.username || !p.pwd;
}
//登出接口
exports.logout = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(cxt) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (!(cxt.session && cxt.session.user)) {
                            _context3.next = 4;
                            break;
                        }

                        cxt.session = null;
                        cxt.body = { code: 0, msg: '退出成功' };
                        return _context3.abrupt('return');

                    case 4:
                        cxt.body = { code: 0, msg: '未登录' };

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function (_x4) {
        return _ref3.apply(this, arguments);
    };
}();
//注册
exports.add = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(cxt) {
        var r;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        console.log(cxt.request.body);

                        if (!validNameAndPwd(cxt.request.body)) {
                            _context4.next = 4;
                            break;
                        }

                        cxt.body = {
                            code: 1,
                            msg: 'paramError'
                        };
                        return _context4.abrupt('return');

                    case 4:
                        _context4.prev = 4;
                        _context4.next = 7;
                        return userService.add(createUser(cxt.request.body));

                    case 7:
                        r = _context4.sent;

                        cxt.body = { code: 0, data: r, msg: 'success' };
                        _context4.next = 14;
                        break;

                    case 11:
                        _context4.prev = 11;
                        _context4.t0 = _context4['catch'](4);

                        cxt.body = { code: 1, msg: 'error', data: _context4.t0 };

                    case 14:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[4, 11]]);
    }));

    return function (_x5) {
        return _ref4.apply(this, arguments);
    };
}();
//更新
exports.update = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    try {} catch (e) {}

                case 1:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _callee5, this);
}));
exports.signin = function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(ctx) {
        var code, r;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        code = ctx.query.code;
                        _context6.next = 3;
                        return signinService.valid(code, 1);

                    case 3:
                        r = _context6.sent;

                        if (r) {
                            ctx.body = { code: 0, msg: 'success' };
                        } else {
                            ctx.body = { code: 1, msg: '验证码无效' };
                        }

                    case 5:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function (_x6) {
        return _ref6.apply(this, arguments);
    };
}();
exports.createCode = function () {
    var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(ctx) {
        var code;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return signinService.create();

                    case 2:
                        code = _context7.sent;

                        ctx.body = { code: 0, msg: '', data: { code: code } };

                    case 4:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    return function (_x7) {
        return _ref7.apply(this, arguments);
    };
}();
function createUser(p) {
    var user = {};
    user.username = p.username;
    user.name = p.name || '';
    user.pwd = p.pwd || '';
    user.avatar = p.avatar || '';
    user.email = p.email || '';
    user.roles = p.roles || 1;
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