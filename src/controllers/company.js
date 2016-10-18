var service = require('../services/company');
exports.add = async function(ctx,next){
    var company = createCompany(ctx.request.body);
    company = await service.add(company);
    if(company){
        ctx.body = {
            code:0,
            data:{
                company:company
            }
        }
    }else{
        ctx.body = {
            code:1,
            data:null
        }
    }
};
exports.update = async function(ctx){
    try{
        let r = await service.update(createCompany(ctx.request.body));
        ctx.body = {code:0,data:r,msg:'success'};
    }catch(e){
        ctx.body = {code:1,msg:'error',data:e};
        console.log(e);
    }
};
exports.delete = async function(ctx){
    let r = await service.delete(parseInt(ctx.query.id));
    ctx.body = {
        code:r?0:1,
        data:null
    }
};
exports.list = async function(ctx,next){
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
function createCompany(p){
    var company = {};
    company.id = p.id;
    company.name = p.name;
    company.desc = p.desc;
    company.logo = p.logo;
    company.type = p.type;
    company.process = p.process;
    company.number = p.number;
    company.address = p.address;
    company.introduction = p.introduction;
    company.tag = p.tag;
    return company;
}