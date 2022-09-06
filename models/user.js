module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define ('user' ,
    {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
        tableNameFreeze: true
    });
    
    return User;
};



//needs the const to rquire models at the top.?