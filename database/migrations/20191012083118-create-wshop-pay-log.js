'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_pay_log', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
         comment : '-',
      },
    	order_id: {
        type: Sequelize.INTEGER(8),
        allowNull: false,
         comment : '-',
      },
      order_amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
         comment : '-',
      },
      order_type: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
         comment : '-',
      },
      is_paid: {
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
    return queryInterface.dropTable('wshop_pay_log');
  }
};