module.exports = (sequelize, Sequelize) => {
  const productModel = sequelize.define(
    "product",
    {
      product_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // Basic detail start
      product_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_size: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "--",
      },
      sku_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: null,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      in_stock: {
        type: Sequelize.BOOLEAN(true, false),
        defaultValue: true,
      },
      product_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
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
  return productModel;
};
