/**
 * Created by chendi on 16/9/26.
 */
const SigninCode = require('../models').SigninCode;
const expire = 1000*30;
exports.create = async function(code){
    //创建一个有过期时间的二维码
    const row = await  SigninCode.create(currentDate()+expire,code);
    return row;
};
exports.valid = async function(ocrId,userId){
    //更新一个code=code,时间不超过当前时间的row,设置时间为一个无限早的时间.如果返回的更新函数>1,则签到成功,
    //且code失效.只供一次签到使用
    //用于查询当前招聘会的签到情况
    const row = await SigninCode.update(currentDate(),code,1000000000,ocrId,userId);
    return !row;
};
exports.hasSignin = async function(){
    const row = await SigninCode.getCode(userId,ocrId);
};
function currentDate(){
    return parseInt(Date.now()/1000);
}