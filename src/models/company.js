module.exports = function(sequelize,DataTypes){
    return sequelize.define('company',{
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
            allowNull:true,
            comment:'图标'
        },
        type:{
            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'企业类型/传统公司,互联网公司等.'
        },
        process:{
            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'如上市公司/A轮'
        },
        number:{
            type:DataTypes.INTEGER(10),
            allowNull:true,
            defaultValue:3,
            comment:'员工数量'
        },
        address:{
            type:DataTypes.STRING(300),
            allowNull:true,
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
        tableName:'company',
        comment:'公司/企业',
        indexes:[],
        classMethods:{
            findByName:async function(title){
                return await this.findAll({
                    where:{
                        name:{
                            like:`%${title}%`
                        }
                    }
                })
            },
            listCompany:async function(page,pageSize){
                return await this.findAll({
                    where:{

                    },
                    limit:pageSize,
                    offset:page*pageSize,
                    order:'id DESC'
                })
            },
            delete:async function(id){
                return await this.destroy({
                    where:{
                        id:id
                    }
                });
            },
            add:async function(company){
                const row = this.build(company);
                return await row.save();
            },
            update:async function(cp){
                let row = await this.findById(cp.id);
                row.id = cp.id;
                row.name = cp.name;
                row.desc = cp.desc;
                row.logo = cp.logo;
                row.type = cp.type;
                row.process = cp.process;
                row.number = cp.number;
                row.address = cp.address;
                row.introduction = cp.introduction;
                row.tag = cp.tag;
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
