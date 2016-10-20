module.exports = function(sequelize,DataTypes){
    return sequelize.define('signin',{
        id:{
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        code:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'验证码'
        },
        ocrId:{
            type:DataTypes.BIGINT(20),
            allowNull:false,
            comment:'招聘会',
        },
        expire:{
            type:DataTypes.TEXT(),
            allowNull:false,
            comment:'招聘信息'
        },
        userId:{
            type:DataTypes.BIGINT(20),
            allowNull:true,
        }
    },{
        tableName:'signin',
        comment:'签到',
        indexes:[],
        classMethods:{
            findByTitle:async function(title){
                return await this.findAll({
                    where:{
                        code:{
                            like:`%${code}%`
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
                    // order:'fromDate DESC'
                })
            },
            add:async function(code){
                const row = this.build(code);
                return await row.save();
            },
            delete:async function(id){
                return await this.destroy({
                    where:{
                        id:id
                    }
                });
            },
            update:async function(c,code){
                let row = await this.findById(c,code.code);
                if(!row){
                    return null;
                }
                row.id = code.id;
                row.expire = code.expire;
                row.userId = code.userId;
                row.ocrId = row.ocrId;
                return await row.save();

            },
            findById:async function(c,code){
                return await this.find({
                    where:{
                        code:code,
                        expire:{
                            $gt:c
                        }
                    }
                })
            }

        }
    })
};
