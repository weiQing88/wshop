'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: ''
      },
      user_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      country: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        defaultValue: '0'
      },
      province: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        defaultValue: '0'
      },
      city: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        defaultValue: '0'
      },
      district: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        defaultValue: '0'
      },
      address: {
        type: Sequelize.STRING(120),
        allowNull: false,
        defaultValue: ''
      },
      mobile: {
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: ''
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      sign_building: {
        type: Sequelize.STRING(120),
        allowNull: true
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_address');
  }
};