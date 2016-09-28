/**
 * Created by chendi on 16/9/26.
 */
var uuid = require('node-uuid');
const SigninCode = require('../models').Signin;
const expire = 30;
exports.create = async function(){
    var code = uuid.v1().split('-')[0];
    //创建一个有过期时间的二维码
    return await  SigninCode.add({expire:currentDate()+expire,code:code});
};
exports.valid = async function(code,userId,ocrId){
    //更新一个code=code,时间不超过当前时间的row,设置时间为一个无限早的时间.如果返回的更新函数>1,则签到成功,
    //且code失效.只供一次签到使用
    //用于查询当前招聘会的签到情况
    return  await SigninCode.update(currentDate(),{code:code,expire:1000000000,ocrId:ocrId,userId:userId});
};
exports.hasSignin = async function(){
    const row = await SigninCode.getCode(userId,ocrId);
};
function currentDate(){
    return parseInt(Date.now()/1000);
}