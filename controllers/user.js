const userService = require('../services/user');
const signinService= require('../services/signin');

//登录接口
exports.login = async function (cxt,next){
    var username = cxt.request.body.username;
    var pwd = cxt.request.body.pwd;
    if(validNameAndPwd(cxt.request.body)){
        this.body = {
            code:1,
            msg:'paramError'
        };
        return;
    }
    if(cxt.session && cxt.session.user){
        cxt.body = {code:0,msg:'已登录',data:cxt.session.user};
        return;
    }
    let user;
    try{
        user = await userService.login(username,pwd);
    }catch(e){
        console.log(e);
    }
    if(user){
        cxt.body = {code:0,msg:'success',data:user};
        cxt.session.user = user;
        return;
    }
    cxt.status = 200;
    cxt.body = {code:1,msg:'登录失败.'};
};
exports.valid = async function(cxt){

    if(cxt.session && cxt.session.user){
        cxt.body = {code:0,msg:'已登录',data:cxt.session.user};
    }else{
        cxt.body = {code:1,msg:'未登录'}
    }
}
function validNameAndPwd(p){
    return (!p.username || !p.pwd);
}
//登出接口
exports.logout = async function(cxt){
    if(cxt.session && cxt.session.user){
        cxt.session = null;
        cxt.body = {code:0,msg:'退出成功'};
        return;
    }
    cxt.body = {code:0,msg:'未登录'};
}
//注册
exports.add = async function (cxt){
    console.log(cxt.request.body);
    if(validNameAndPwd(cxt.request.body)){
        cxt.body = {
            code:1,
            msg:'paramError'
        };
        return;
    }
    try{
        let r = await userService.add(createUser(cxt.request.body));
        cxt.body = {code:0,data:r,msg:'success'};
    }catch(e){
        cxt.body = {code:1,msg:'error',data:e};
    }
}
//更新
exports.update = async function(){
    try{

    }catch(e){

    }
};
exports.signin = async function(ctx){
    const code = ctx.query.code;
    const r = await signinService.valid(code,1);
    if(r){
        ctx.body = {code:0,msg:'success'};
    }else{
        ctx.body = {code:1,msg:'验证码无效'}
    }
};
exports.createCode = async function(ctx){
    const code = await signinService.create();
    ctx.body = {code:0,msg:'',data:{code:code}};
};
function createUser(p){
    let user = {};
    user.username = p.username ;
    user.name = p.name || '';
    user.pwd = p.pwd || '';
    user.avatar = p.avatar || '';
    user.email = p.email || '';
    user.roles = p.roles || 1;
    user.school = p.school || '';
    user.phone = p.phone || '';
    user.age = p.age || '';
    user.sex = p.sex || '';
    user.specialty = p.specialty || '';
    user.page = p.page || '';
    user.desc = p.desc || '';
    user.address = p.address || '';
    return user;
}