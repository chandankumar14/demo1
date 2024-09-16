module.exports = (sequelize, Sequelize) => {
  const cartModel = sequelize.define(
    "cart",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      
      product_id: {
        type: Sequelize.STRING,
        unique: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN(true, false),
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return cartModel;
};
