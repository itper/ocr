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
router.get('/user/valid', userController.valid);
router.get('/user/logout', userController.logout);
router.get('/company/list', companyController.list);
router.post('/company/add', companyController.add);
router.get('/position/list', positionController.list);
router.post('/position/add', positionController.add);
router.get('/user/signin', userController.signin);
router.get('/user/createcode', userController.createCode);

router.get('/info/add', infoController.add);