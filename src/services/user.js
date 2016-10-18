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
u.delete = async function(id){
    return await User.delete(id)===1;
};
u.update = async function(user){
    let r = await User.update(user);
    return r.get({plain:true});
}
u.list = async function(page,pageSize,type){
    return  await User.list(page,pageSize,type);
};