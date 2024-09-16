const config = require("../app/config/_db.config");
const Sequelize = require("sequelize");
/*** Creating Instance of Sequelize for datbase connection  */
const sequelize = new Sequelize(config.HOST, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/*********** Definfing all model here ********* */
db.user_module = require("../app/customer/_model/_user_model")(
  sequelize,
  Sequelize
);
db.order = require("../app/orders/_model/_order_model")(sequelize, Sequelize);
db.cart = require("../app/orders/_model/_cart_model")(sequelize, Sequelize);
db.order_details = require("../app/orders/_model/_order_details")(
  sequelize,
  Sequelize
);
db.payment_details = require("../app/payment/_model/_payment_model")(
  sequelize,
  Sequelize
);
db.product = require("../app/product/_model/_product_model")(
  sequelize,
  Sequelize
);
db.product_variant = require("../app/product/_model/_product_variant_model")(
  sequelize,
  Sequelize
);
db.product_categories =
  require("../app/product/_model/_product_category_model")(
    sequelize,
    Sequelize
  );
/************** Defining relationship between table ************ */
db.user_module.hasMany(db.order, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
});

db.user_module.hasMany(db.payment_details, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
});

db.product.hasMany(db.product_variant, {
  foreignKey: "product_id",
  onDelete: "RESTRICT",
});

db.product.belongsTo(db.product_categories, {
  through: "product_categories",
  foreignKey: "category_id",
});

db.product_variant.belongsTo(db.product_categories, {
  through: "product_categories",
  foreignKey: "category_id",
});

db.order_details.hasMany(db.product, {
  foreignKey: "product_id",
  onDelete: "RESTRICT",
});

module.exports = db;
