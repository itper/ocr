const service = require('../services/info');

exports.listInfo = async function(){

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
    row.title=query.title;
    row.content=query.content;
    row.publisher=query.publisher;
    row.fromDate=query.fromDate;
    row.toDate=query.toDate;
    row.address=query.address;
    row.company=query.company;
    return row;
}