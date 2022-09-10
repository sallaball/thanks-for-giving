// "use strict";

// const Sequelize = require('sequelize');
// let sequelize;

// const env = "development";
// const config = require(__dirname + "/config.json")[env];


//     sequelize = new Sequelize(
//         config.database,
//         config.username,
//         config.password,
//         {
//             host: config.host,
//             dialect: 'mysql',
//             operatorsAliases: false,

//             pool: {
//                 max: 5,
//                 min: 0,
//                 acquire: 30000,
//                 idle: 10000
//             }
//         }
//     );


// const db = {};

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

require("dotenv").config();
const Sequelize = require("sequelize");
//let sequelize;
// if(process.env.JAWSDB_URL){
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
//}else {
  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    dialectOptions:{
      decimalNumbers: true,
    },
    port: 3306,
  });
//}
module.exports = sequelize;