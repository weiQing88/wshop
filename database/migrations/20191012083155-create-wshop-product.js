'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goods_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      goods_specification_ids: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: ''
      },
      goods_sn: {
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: ''
      },
      goods_number: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      retail_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0'
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
    return queryInterface.dropTable('wshop_product');
  }
};