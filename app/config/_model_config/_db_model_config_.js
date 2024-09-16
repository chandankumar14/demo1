const dbconfig = require("../_db.config");
const { Sequelize, DataTypes } = require('sequelize');

/*** Creating the Instance of Sequelize */
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle,
  },
});
/** Creating Object with DB Connection******* */
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/******** Model Sync *********** */

/*** user model configuration start here ********* */
db.user_details = require("../../customer/_model/_user_model")(sequelize, DataTypes)


/*** order model configuration start here *********** */

