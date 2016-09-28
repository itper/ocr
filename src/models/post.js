module.exports = function(sequelize,DataTypes){
    return sequelize.define('post',{
        id:{
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        userId:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'招聘信息标题'
        },
        companyId:{
            type:DataTypes.TEXT(),
            allowNull:false,
            comment:'招聘信息'
        },
        positionId:{
            type:DataTypes.BIGINT(20),
            allowNull:false,
        }
    },{
        tableName:'post',
        comment:'简历投递',
        indexes:[],
        classMethods:{
            findByTitle:async function(title){
                return await this.findAll({
                    where:{
                        title:{
                            like:`%${title}%`
                        }
                    }
                })
            },
            listOCR:async function(page,pageSize){
                return await this.findAll({
                    where:{

                    },
                    limit:pageSize,
                    offset:page*pageSize,
                    order:'fromDate DESC'
                })
            },
            addOCR:async function(ocr){
                const row = this.build(ocr);
                return await row.save();
            },
            update:async function(ocr){
                let row = await this.findById(ocr.id);
                row.title=ocr.title;
                row.content=ocr.content;
                row.publisher=ocr.publisher;
                row.fromDate=ocr.fromDate;
                row.toDate=ocr.toDate;
                row.address=ocr.address;
                row.company=ocr.company;
                return await row.save();

            },
            findById:async function(id){
                return await this.find({
                    where:{
                        id:id
                    }
                })
            }

        }
    })
};
