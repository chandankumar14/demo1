module.exports = (sequelize, Sequelize) => {
  const paymentModel = sequelize.define(
    "payment_details",
    {
      payment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },

      payment_mode: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      trans_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      status: {
        type: Sequelize.ENUM("COMPLETE", "FAILED"),
        defaultValue: "COMPLETE",
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
  return paymentModel;
};
