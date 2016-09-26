const userService = require('../services/user');

//登录接口
exports.login = async function (){
    var name = this.query.name;
    var pwd = this.query.pwd;
    var body = this.request.body || {};
    if(!name || !pwd){
        this.status = 422;
        this.body = {
            error:'paramError',
            reason:''
        };
        return;return
    }
    if(this.session && this.session.user){
        this.body = {code:0,msg:'已登录'};
        return;
    }
    let user;
    try{
        user = await userService.login(name,pwd);
    }catch(e){
        console.log(e);
    }

    if(user){
        this.body = {user:user};
        this.session.user = user;
        return;
    }

    this.body = {code:1,msg:'登录失败.'};
};
//登出接口
exports.logout = async function(){
    if(this.session && this.session.user){
        this.session = null;
        this.body = {code:0,msg:'退出成功'};
        return;
    }
    this.body = {code:0,msg:'未登录'};
}
//注册
exports.add = async function (){
    try{
        let r = await userService.add(createUser(this.query));
        this.body = r;
    }catch(e){
        this.body = e;
    }
}
//更新
exports.update = async function(){
    try{

    }catch(e){

    }
}
function createUser(p){
    let user = {};
    user.username = p.username;
    user.name = p.name;
    user.name = p.name;
    user.pwd = p.pwd;
    user.avatar = p.avatar;
    user.email = p.email;
    user.roles = p.roles;
    user.school = p.school;
    user.phone = p.phone;
    user.age = p.age;
    user.sex = p.sex;
    user.specialty = p.specialty;
    user.page = p.page;
    user.desc = p.desc;
    user.address = p.address;
    return user;
}