module.exports = function(sequelize,DataTypes){
    return sequelize.define('entry_form',{
        id:{
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        userId:{
            field:'user_id',
            type:DataTypes.BIGINT(20),
            allowNull:false,
        },
        ocrInfoId:{
            field:'ocr_info_id',
            type:DataTypes.BIGINT(20),
            allowNull:false,
            comment:'xuanjianghui'
        },
        userName:{
            field:'user_name',
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'姓名'
        },
    },{
        tableName:'entry_form',
        comment:'报名信息',
        indexes:[],
        classMethods:{
            findByUserId:async function(userId){
                return await this.findAll({
                    where:{
                        userId:{
                            like:`%${userId}%`
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
                })
            },
            add:async function(entry){
                const row = this.build(entry);
                return await row.save();
            },
            delete:async function(userId,ocrId){

            },
            update:async function(entry){
                let row = await this.findById(entry.id);
                row.userId = entry.userId;
                row.ocrInfoId = entry.ocrInfoId;
                row.userName = entry.userName;
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
