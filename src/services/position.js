var Position = require('../models').Position;

var u = module.exports = {};


u.list = async function(page,pageSize){
    return  await Position.listPosition(page,pageSize);
};
u.add = async function(p){
    return await Position.add(p);
};
u.update = async function(p){
    return (await Position.update(p)).get({plain:true});
};
u.delete = async function(id){
    return (await Position.delete(id))===1;
}