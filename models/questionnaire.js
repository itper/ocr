module.exports = function(sequelize,DataTypes){
    return sequelize.define('questionnaire',{
        id:{
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        parentId:{
            type:DataTypes.BIGINT(20),
            allowNull:true,
            comment:'问卷和问卷内容共享',
        },
        title:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'问卷信息标题'
        },
        content:{
            type:DataTypes.TEXT(),
            allowNull:false,
            comment:'问卷内容信息'
        },
        publisher:{
            type:DataTypes.BIGINT(20),
            allowNull:false,
            comment:'问卷发布者',
        },
        fromDate:{
            field:'from_date',
            type:DataTypes.INTEGER(11),
            allowNull:false,
            comment:'问卷开始时间'
        },
        toDate:{
            field:'to_date',
            type:DataTypes.INTEGER(11),
            allowNull:false,
            comment:'问卷结束时间'
        },
        state:{
            field:'state',
            type:DataTypes.INTEGER(2),
            allowNull:false,
            defaultValue:3,
            comment:'状态[1:进行中,2:一结束,3:即将开始]'
        },
        company:{
            type:DataTypes.STRING(300),
            allowNull:false,
            comment:'公司'
        }
    },{
        tableName:'questionnaire',
        comment:'问卷',
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
