let router = require('koa-router')();
let Promise = require('bluebird');
let path = require('path');
let fs = require('fs');
let userLoginController = require('../controllers/user/login');
Promise.promisifyAll(fs);
module.exports = router;

router.get('/user/login',userLoginController);