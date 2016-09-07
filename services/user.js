var User = require('../models').User;

var u = module.exports = {};

u.login = async function(name){
    let user = await User.find({where:{name:name}});
    return user;
}