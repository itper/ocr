var   service = require('../services/position');
//添加职位
exports.add = async function(ctx){
    var p = createPosition(ctx.request.body);
    p = await service.add(p);
    if(p){
        ctx.body = {
            code:0,
            data:{
                company:p
            }
        }
    }else{
        ctx.body = {
            code:1,
            data:null
        }
    }
};
//拉去职位
exports.list = async function(ctx){
    const list = await service.list(parseInt(ctx.query.page||0),parseInt(ctx.query.pageSize||20));
    if(list){
        ctx.body = {
            code:0,
            data:{
                list:list
            }
        }
    }else{
        ctx.body = {
            code:1,
            data:null
        }
    }
};
//删除职位
exports.deletePosition = async function(){

};
//通过公司Id获取招聘信息.
exports.getPosition = async function(){

};
//
exports.favoritePosition = async function(){

};
exports.deleteFavoritePosition = async function(){
    
}
function createPosition(p){
    let position = {};
    position.name = p.name;
    position.salary = p.salary;
    position.publisher = p.publisher;
    position.jobnature = p.jobnature;
    position.education = p.education;
    position.state = p.state;
    position.address = p.address;
    position.company = p.company;
    position.companyId = p.companyId;
    position.desc = p.desc;
    return position;
}