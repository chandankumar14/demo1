module.exports = (sequelize, Sequelize) => {
  const orderModels = sequelize.define(
    "order_details",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: Sequelize.INTEGER,
        unique: false,
      },
      product_id: {
        type: Sequelize.STRING,
        unique: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    },
    {
      freezeTableName: true,
    }
  );
  return orderModels;
};
