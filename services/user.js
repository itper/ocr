var User = require('../models').User;

var u = module.exports = {};

u.login = async function(username,pwd){
    let user = await User.validPwd(username,pwd);
    return user;
};
u.add = async function(user){
    let r = await User.add(user);
    return r.get({plain:true});
};