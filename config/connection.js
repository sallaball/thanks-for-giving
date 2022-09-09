
const Sequelize = require("sequelize");
require('dotenv').config()

"use strict";


let sequelize;

const env = "development";
const config = require(__dirname + "/config.json")[env];


    sequelize = new Sequelize(

     

        config.database,
        config.username,
        config.password,

        {
            host: config.host,
            dialect: 'mysql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0, 
                acquire: 30000,
                idle: 10000
            }
        }

    )


module.exports = sequelize;

    


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

