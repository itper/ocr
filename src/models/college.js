module.exports = function(sequelize,DataTypes){
    return sequelize.define('college',{
        id:{
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'公司名称'
        },
        desc:{
            type:DataTypes.STRING(500),
            allowNull:false,
            comment:'一句简单的描述'
        },
        logo:{
            type:DataTypes.STRING(200),
            allowNull:false,
            comment:'图标'
        },
        type:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'企业类型/传统公司,互联网公司等.'
        },
        process:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'如上市公司/A轮'
        },
        number:{
            type:DataTypes.INTEGER(10),
            allowNull:false,
            defaultValue:3,
            comment:'员工数量'
        },
        address:{
            type:DataTypes.STRING(300),
            allowNull:false,
            comment:'招聘会/宣讲会地址'
        },
        introduction:{
            type:DataTypes.TEXT(),
            allowNull:true,
            comment:'企业介绍'
        },
        tag:{
            type:DataTypes.STRING(1000),
            allowNull:true,
            comment:'标签/如弹性工作,工资高.'
        }
    },{
        tableName:'college',
        comment:'公司/企业',
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
            list:async function(page,pageSize){
                return await this.findAll({
                    where:{

                    },
                    limit:pageSize,
                    offset:page*pageSize,
                    order:'fromDate DESC'
                })
            },
            add:async function(ocr){
                const row = this.build(ocr);
                return await row.save();
            },
            delete:async function(id){
                return await this.destroy({
                    where:{
                        id:id
                    }
                });
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
