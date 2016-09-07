let userService = require('../../services/user');

module.exports = async function login(){
    var name = this.query.name;
    var body = this.request.body || {};
    if(!name){
        this.status = 422;
        this.body = {
            error:'paramError',
            reason:''
        };
        return;
    }
    let user = await userService.login(name);
    console.log(user);
    if(user){
        this.body = {user:user};
    }else{
        this.body = {};
    }
}