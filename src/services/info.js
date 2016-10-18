const OCRInfo = require('../models').OCRInfo;

module.exports = {
    listInfo:async function(page,pageSize){
        return await OCRInfo.listOCR(page,pageSize);
    },
    findByTitle:async function(){
        return  row = await OCRInfo.findByTitle(title);
    },
    add:async function(info){
        const row = await OCRInfo.addOCR(info);
        return row.get({plain:true});
    },
    update:async function(info){
        const row = await OCRInfo.update(info);
        return row.get({plain:true});
    },
    delete:async function(id){
        return (await OCRInfo.delete(id))===1;
    }

};