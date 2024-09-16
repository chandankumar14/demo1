module.exports = (sequelize, Sequelize) => {
  const userModels = sequelize.define(
    "user_details",
    {
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // Basic detail start
      first_name: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "--",
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      
      contact_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_number2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country_code: {
        type: Sequelize.STRING,
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      profile_photo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("ACTIVE", "INACTIVE"),
        defaultValue: "ACTIVE",
      },
      // Personal details start
      present_address: {
        type: Sequelize.TEXT,
      },
      address_check_value: {
        type: Sequelize.STRING,
      },
      parmanent_address: {
        type: Sequelize.TEXT,
      },
      // Extra start
      password: {
        type: Sequelize.STRING,
      },
      user_type: {
        type: Sequelize.ENUM("normal", "login"),
        defaultValue: "normal",
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
  return userModels;
};
