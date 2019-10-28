'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_payment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
         comment : '-',
      },
      pay_code: {
        type: Sequelize.STRING(20),
        allowNull: false,
         comment : '-',
      },
      pay_name: {
        type: Sequelize.STRING(120),
        allowNull: false,
         comment : '-',
      },
      pay_fee: {
        type: Sequelize.STRING(10),
        allowNull: false,
         comment : '-',
      },
      pay_desc: {
        type: Sequelize.TEXT,
        allowNull: false,
         comment : '-',
      },
      pay_order: {
        type: Sequelize.INTEGER(3),
        allowNull: true,
         comment : '-',
      },
      pay_config: {
        type: Sequelize.TEXT,
        allowNull: true,
         comment : '-',
      },
      enabled: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
         comment : '-',
      },
      is_cod: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
         comment : '-',
      },
      is_online: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
         comment : '-',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_payment');
  }
};