<<<<<<< HEAD
const Sequelize = require("sequelize");
require('dotenv').config()
=======
"use strict";
>>>>>>> 9a8f35e4996bb91feb2cad6129b0a349730ce441

const Sequelize = require('sequelize');
let sequelize;

const env = "development";
const config = require(__dirname + "/config.json")[env];


    sequelize = new Sequelize(
<<<<<<< HEAD
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
=======
        config.database,
        config.username,
        config.password,
>>>>>>> 9a8f35e4996bb91feb2cad6129b0a349730ce441
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
    );


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;