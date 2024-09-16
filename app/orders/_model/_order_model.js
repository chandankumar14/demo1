module.exports = (sequelize, Sequelize) => {
  const orderModels = sequelize.define(
    "order",
    {
      order_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // Basic detail start
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      payment_id: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "--",
      },
      product_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      order_status: {
        type: Sequelize.ENUM("COMPLETE", "INCOMPLETE", "ACTIVE"),
        defaultValue: "ACTIVE",
      },
      order_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      // Personal details start
      delivery_address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN(true, false),
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return orderModels;
};
