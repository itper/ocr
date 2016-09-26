module.exports = function(sequelize,DataTypes){
    return sequelize.define('resume',{
        id:{
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'招聘信息标题'
        },
        email:{
            type:DataTypes.STRING(200),
            allowNull:false,
            comment:'邮箱'
        },
        birthDate:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
            comment:'出生日期'
        },
        city:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'所在城市',
        },
        cellphone:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'电话',
        },
        education:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'学历',
        },
        college:{
            type:DataTypes.STRING(200),
            allowNull:false,
            comment:'学校',
        },
        graduateTime:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
            comment:'毕业时间',
        },
        specialty:{
            type:DataTypes.STRING(200),
            allowNull:false,
            comment:'专业',
        },
        introduction:{
            type:DataTypes.TEXT(),
            allowNull:true,
            comment:'自我介绍',
        },
        wishPosition:{
            type:DataTypes.STRING(200),
            allowNull:false,
            comment:'期望工作',
        },
        wishSalary:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'期望薪资',
        },
        wishCity:{
            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'期望城市'
        },
        sex:{
            type:DataTypes.STRING(1),
            allowNull:true,
            comment:'性别',
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'姓名',
        },
        avatar:{
            type:DataTypes.STRING(200),
            allowNull:true,
            comment:'头像',
        },


        content:{
            type:DataTypes.TEXT(),
            allowNull:false,
            comment:'招聘信息'
        },
        publisher:{
            type:DataTypes.BIGINT(20),
            allowNull:false,
        },
        fromDate:{
            field:'from_date',
            type:DataTypes.INTEGER(11),
            allowNull:false,
            comment:'招聘会开始时间'
        },
        toDate:{
            field:'to_date',
            type:DataTypes.INTEGER(11),
            allowNull:false,
            comment:'招聘会结束时间'
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
            comment:'招聘会/宣讲会地址'
        },
        company:{
            type:DataTypes.STRING(300),
            allowNull:false,
            comment:'公司'
        }
    },{
        tableName:'resume',
        comment:'简历',
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
