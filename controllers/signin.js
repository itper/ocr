var signinService = require('../servers/signin');
exports.request = async function(){
};


exports.valid = async function(){
    const code = this.query.code;
    const r = await signinService.valid(code);
    if(r){
        this.body = {code:0,msg:'success'};
    }else{
        this.body = {code:1,msg:'验证码无效'}
    }
};