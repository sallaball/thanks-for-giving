const {Model} = require("sequelize")
const sequelize = require("../config/connection")

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