module.exports = (sequelize, Sequelize) => {
  const product_variantModel = sequelize.define(
    "product_variant",
    {
      product_variant_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
  return product_variantModel;
};
