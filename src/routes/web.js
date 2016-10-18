let router = require('koa-router')();
let Promise = require('bluebird');
let path = require('path');
let fs = require('fs');
let userController = require('../controllers/user.js');
let infoController = require('../controllers/info.js');
let companyController = require('../controllers/company');
let positionController = require('../controllers/position');
Promise.promisifyAll(fs);
module.exports = router;



router.post('/user/login',userController.login);
router.post('/user/add',userController.add);
router.post('/user/update',userController.update);
router.get('/user',userController.userlist);
router.get('/user/delete',userController.delete);
router.get('/user/valid',userController.valid);
router.get('/user/logout',userController.logout);
router.get('/company/list',companyController.list);
router.post('/company/add',companyController.add);
router.get('/position/list',positionController.list);
router.post('/position/add',positionController.add);
router.get('/user/signin',userController.signin);
router.get('/user/createcode',userController.createCode);


router.get('/info/add',infoController.add);