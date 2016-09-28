let path = require('path');
let Sequelize = require('sequelize');
let config = require('../config/config');
let database = config.database;
let sequelize = new Sequelize(database.db,database.username,database.password,database);

function load(name){
    var v = sequelize.import(path.join(__dirname,name));
    v.sync();
    return v;
}
var model = {};
module.exports = {
    User:load('user'),
    OCRInfo:load('ocr_info'),
    EntryForm:load('entry_form'),
    Position:load('positions'),
    Questionnaire:load('questionnaire'),
    Post:load('post'),
    Resume:load('resume'),
    Company:load('company'),
    College:load('college'),
    Signin:load('signin')
}







/**
 *
 *
 *
 *
 copy obj

 var DataTypes = new require('sequelize');
 function createUpdate(module,row,obj){
    Object.keys(module).map((k)=>console.log(`${row}.${k} = ${obj}.${k};`));
}

 var a = {title:xxx}
 createUpdate(a,'row','user');

 **/

/**

 entry_form//招聘报名.
 ocr_info//招聘会
 position//职位
 resume//简历
 user//包括老师,学生和教师
 post//简历投递情况,有已投递,已阅读,












 **/