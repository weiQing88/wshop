'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_cart', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      session_id: {
        type: Sequelize.CHAR(32),
        allowNull: false,
        defaultValue: '\'\''
      },
      goods_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      goods_sn: {
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: '\'\''
      },
      product_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: true,
        defaultValue: '0'
      },
      goods_name: {
        type: Sequelize.STRING(120),
        allowNull: false,
        defaultValue: '\'\''
      },
      market_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0'
      },
      retail_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0'
      },
      number: {
        type: Sequelize.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      goods_specifition_name_value: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      goods_specifition_ids: {
        type: Sequelize.STRING(60),
        allowNull: true,
        defaultValue: '\'\''
      },
      checked: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '1'
      },
      list_pic_url: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\''
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      rec_type: {
        type: Sequelize.INTEGER(1),
        allowNull: true
      },


    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_cart');
  }
};