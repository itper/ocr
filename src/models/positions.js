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
            allowNull:true,
            comment:'薪资'
        },
        publisher:{
            type:DataTypes.BIGINT(20),
            allowNull:true,
            comment:'发布人',
        },
        jobnature:{
            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'职位类型/兼职/全职'
        },
        education:{
            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'要求',
        },

        state:{
            field:'state',
            type:DataTypes.INTEGER(2),
            allowNull:true,
            defaultValue:3,
            comment:'状态[1:进行中,2:一结束,3:即将开始]'
        },
        address:{
            type:DataTypes.STRING(300),
            allowNull:true,
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
            allowNull:true,
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
            listPosition:async function(page,pageSize){
                return await this.findAll({
                    where:{

                    },
                    limit:pageSize,
                    offset:page*pageSize,
                    // order:'fromDate DESC'
                })
            },
            delete:async function(id){
                return await this.destroy({
                    where:{
                        id:id
                    }
                });
            },
            add:async function(p){
                const row = this.build(p);
                return await row.save();
            },
            update:async function(p){
                let row = await this.findById(p.id);
                row.id = p.id;
                row.name = p.name;
                row.salary = p.salary;
                row.publisher = p.publisher;
                row.jobnature = p.jobnature;
                row.education = p.education;
                row.state = p.state;
                row.address = p.address;
                row.company = p.company;
                row.companyId = p.companyId;
                row.desc = p.desc;

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
