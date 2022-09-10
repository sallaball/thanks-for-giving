const {Sequelize, Model, DataTypes} = require("sequelize")
//const sequelize = require('../config/connection');
const sequelize = new Sequelize("sqlite::memory:");



const bcrypt = require("bcrypt")

class User extends Model{
    checkPassword(login) {
        return bcrypt.compareSync(login, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //created: {
          //  type: Sequelize.DATE,
            //defaultValue: Sequelize.NOW
        //}
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },

    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    },
);

module.exports = User;
