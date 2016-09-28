var Company = require('../models').Company;

var u = module.exports = {};


u.list = async function(page,pageSize){
    return  await Company.listCompany(page,pageSize);
};
u.add = async function(company){
    return await Company.add(company);
};