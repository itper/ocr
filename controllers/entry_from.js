const service = require('../services/info');

exports.list = async function(){

};
exports.find = async function(){

};
exports.add = async function(){
    const infoObj = parseUser(this);
    const info = await service.add(infoObj);
    if(info){
        this.body = info;
    }else{
        this.body = {code:1,msg:'添加失败'};
    }

};
exports.update = async function(){

};
function parseUser(cxt){
    const query = cxt.query;
    const row = {};
    row.id = query.id;
    row.userId = query.userId;
    row.ocrInfoId = query.ocrInfoId;
    row.userName = query.userName;
    return row;
}