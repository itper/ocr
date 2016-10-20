var signinService = require('../services/signin');
var Dispatch = require('../global/signDispatch');
exports.request = async function(){
};
exports.valid = async function(){
    const code = this.query.code;
    const r = await signinService.valid(code);
    if(r){
        this.body = {code:0,msg:'success'};
        Dispatch.emit('sign-valid',{code:code});
        console.log('valid');
    }else{
        this.body = {code:1,msg:'验证码无效'}
    }
};
exports.list = async function(ctx){
    if(ctx.query.ocr){

        console.log(ctx.query.ocr);
        const list = await signinService.list(ctx.query.ocr,parseInt(ctx.query.page||0),parseInt(ctx.query.pageSize||20));
        ctx.body = {
            code:0,
            data:{
                list:list
            }
        }
    }else{
        ctx.body = {
            code:1
        }
    }

};