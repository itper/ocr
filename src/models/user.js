module.exports = function(sequelize,DataTypes){
    return sequelize.define('User',{
        id:{
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'名称/企业用户/教师姓名'
        },
        pwd:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'登录密码'
        },
        username:{
            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'登录用户名'
        },
        avatar:{
            type:DataTypes.STRING(200),
            allowNull:true,
            comment:'头像',
        },
        email:{
            type:DataTypes.STRING(400),
            allowNull:true,
            comment:'邮箱',
        },
        type:{
            type:DataTypes.INTEGER(1),
            allowNull:true,
            defauleValue:1,
            comment:'账户类型[1:学生,2:教师,3:企业用户',
        },
        college:{
            type:DataTypes.STRING(500),
            allowNull:true,
            comment:'学校',
        },
        number:{
            type:DataTypes.STRING(100),
            allowNull:false,
            comment:'学号'
        },
        phone:{

            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'联系电话',
        },
        age:{

            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'学生年龄'
        },
        sex:{

            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'学生性别'
        },
        specialty:{

            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'学生专业'
        },
        page:{

            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'学生/老师/企业网站'
        },
        desc:{

            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'学生/老师/企业简介'
        },
        address:{

            type:DataTypes.STRING(100),
            allowNull:true,
            comment:'学生/教师/企业/地址'
        },
        company:{
            type:DataTypes.STRING(200),
            allowNull:true,
            comment:'所在单位(企业用户)'
        },
        companyId:{
            type:DataTypes.BIGINT(20),
            allowNull:true,
            comment:'',
        },

    },{
        tableName:'user',
        comment:'all user',
        indexes:[
            {
                unique:true,
                fields:['number']
            }
        ],
        classMethods:{
            getUserByUsername:async function(name){
                return await this.find({where:{username:name}});
            },
            getUserByName:async function(name){
                return await this.findAll({where:{name:name}});
            },
            list:async function(page,pageSize,type){
                return await this.findAll({
                    where:{
                        type:type
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
                })
            },
            add:async function(user){
                var user = this.build(user);
                return await user.save();
            },
            validPwd:async function(number,pwd){
                return await this.find({where:{number:number,pwd:pwd}});
            },
            update:async function(user){
                var row = await this.getUserByUsername(user.username);
                row.name = user.name;
                row.pwd = user.pwd;
                row.number = user.number;
                row.avatar = user.avatar;
                row.email = user.email;
                row.type = user.type;
                row.school = user.school;
                row.phone = user.phone;
                row.age = user.age;
                row.sex = user.sex;
                row.specialty = user.specialty;
                row.page = user.page;
                row.desc = user.desc;
                row.address = user.address;
                row.company = user.company;
                row.company = user.companyId;
                return await row.save();
            },
        }
    })
}