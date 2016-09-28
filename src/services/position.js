var Position = require('../models').Position;

var u = module.exports = {};


u.list = async function(page,pageSize){
    return  await Position.listPosition(page,pageSize);
};
u.add = async function(p){
    return await Position.add(p);
};