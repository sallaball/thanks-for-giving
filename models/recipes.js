const {Sequelize, Model, DataTypes} = require("sequelize")
//const sequelize = require("../config/connection")
const sequelize = new Sequelize("sqlite::memory:");



class Recipe extends Model{}
Recipe.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        ingredients:{
            type:DataTypes.STRING,
            allowNull: false,

        },
        
    }
)