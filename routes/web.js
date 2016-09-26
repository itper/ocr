let router = require('koa-router')();
let Promise = require('bluebird');
let path = require('path');
let fs = require('fs');
let userController = require('../controllers/user.js');
let infoController = require('../controllers/info.js');
Promise.promisifyAll(fs);
module.exports = router;



router.get('/user/login',userController.login);
router.get('/user/add',userController.add);
router.get('/user/logout',userController.logout);

router.get('/info/add',infoController.add);