module.exports = function(sequelize,DataTypes){
    return sequelize.define('positions',{
        id:{
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'职位'
        },
        salary:{
            type:DataTypes.TEXT(),
            allowNull:false,
            comment:'薪资'
        },
        publisher:{
            type:DataTypes.BIGINT(20),
            allowNull:false,
            comment:'发布人',
        },
        jobnature:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'职位类型/兼职/全职'
        },
        education:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'要求',
        },

        state:{
            field:'state',
            type:DataTypes.INTEGER(2),
            allowNull:false,
            defaultValue:3,
            comment:'状态[1:进行中,2:一结束,3:即将开始]'
        },
        address:{
            type:DataTypes.STRING(300),
            allowNull:false,
            comment:'地址'
        },
        company:{
            type:DataTypes.STRING(300),
            allowNull:false,
            comment:'公司'
        },
        companyId:{
            type:DataTypes.BIGINT(20),
            allowNull:false,
            comment:'公司id',
        },
        desc:{
            type:DataTypes.TEXT(),
            allowNull:false,
            comment:'职位要求'
        }

    },{
        tableName:'position',
        comment:'职位',
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
