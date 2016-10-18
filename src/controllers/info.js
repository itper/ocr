const service = require('../services/info');

exports.listInfo = async function(ctx){
    const list = await service.listInfo(parseInt(ctx.query.page||0),parseInt(ctx.query.pageSize||20),ctx.query.type||1);
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
exports.find = async function(){

};
exports.delete = async function(ctx){
    let r = await service.delete(parseInt(ctx.query.id));
    ctx.body = {
        code:r?0:1,
        data:null
    }
};
exports.add = async function(ctx){
    const infoObj = createOCR(ctx.request.body);
    const info = await service.add(infoObj);
    if(info){
        ctx.body = {code:0,data:info};
    }else{
        ctx.body = {code:1,msg:'添加失败'};
    }

};
exports.update = async function(ctx){
    try{
        let r = await service.update(createOCR(ctx.request.body));
        ctx.body = {code:0,data:r,msg:'success'};
    }catch(e){
        ctx.body = {code:1,msg:'error',data:e};
        console.log(e);
    }
};
function createOCR(query){
    const row = {};
    row.title=query.title;
    row.id = query.id;
    row.content=query.content;
    row.publisher=query.publisher||1;
    row.fromDate=query.fromDate;
    row.toDate=query.toDate;
    row.address=query.address;
    row.company=query.company;
    return row;
}