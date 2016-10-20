'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var publicResource = ['POST:/user/login', 'GET:/user/logout'];

exports.default = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!(publicResource.indexOf(ctx.req.method + ':' + ctx.req.url) > -1)) {
                            _context.next = 4;
                            break;
                        }

                        _context.next = 3;
                        return next();

                    case 3:
                        return _context.abrupt('return');

                    case 4:
                        user = void 0;

                        if (ctx.session) {
                            user = ctx.session.user;
                        }

                        if (user) {
                            _context.next = 9;
                            break;
                        }

                        ctx.body = {
                            code: 2,
                            msg: '未登录'
                        };
                        return _context.abrupt('return');

                    case 9:
                        if (!(user.type === 3)) {
                            _context.next = 14;
                            break;
                        }

                        _context.next = 12;
                        return next();

                    case 12:
                        _context.next = 15;
                        break;

                    case 14:
                        ctx.body = {
                            code: 3,
                            msg: "无权限"
                        };

                    case 15:
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