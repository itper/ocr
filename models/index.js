let path = require('path');
let Sequelize = require('sequelize');
let config = require('../config/config');
let database = config.database;
let sequelize = new Sequelize(database.db,database.username,database.password,database);

function load(name){
    return sequelize.import(path.join(__dirname,name));
}
module.exports = {
    User:load('user')
}