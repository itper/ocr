module.exports = function(sequelize,DataTypes){
    return sequelize.define('User',{
        name:{
            type:DataTypes.STRING(100),
            allowNull:false
        }
    })
}