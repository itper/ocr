'use strict';

var router = require('koa-router')();
var Promise = require('bluebird');
var path = require('path');
var fs = require('fs');
var userController = require('../controllers/user.js');
var infoController = require('../controllers/info.js');
var companyController = require('../controllers/company');
var positionController = require('../controllers/position');
Promise.promisifyAll(fs);
module.exports = router;

router.post('/user/login', userController.login);
router.post('/user/add', userController.add);
router.post('/user/update', userController.update);
router.get('/user', userController.userlist);
router.get('/user/delete', userController.delete);
router.get('/user/valid', userController.valid);
router.get('/user/logout', userController.logout);

router.get('/company', companyController.list);
router.post('/company/add', companyController.add);
router.post('/company/update', companyController.update);
router.get('/company/delete', companyController.delete);

router.post('/ocr/add', infoController.add);
router.get('/ocr/delete', infoController.delete);
router.get('/ocr', infoController.listInfo);
router.post('/ocr/update', infoController.update);

router.get('/position', positionController.list);
router.post('/position/add', positionController.add);
router.post('/position/update', positionController.update);
router.get('/position/delete', positionController.delete);

router.get('/user/signin', userController.signin);
router.get('/user/createcode', userController.createCode);

router.get('/info/add', infoController.add);