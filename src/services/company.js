var Company = require('../models').Company;

var u = module.exports = {};


u.list = async function(page,pageSize){
    return  await Company.listCompany(page,pageSize);
};
u.add = async function(company){
    return await Company.add(company);
};
u.update = async function (company){
    return (await Company.update(company)).get({plain:true});
};
u.delete = async function(id){
    return (await Company.delete(id))===1;
};