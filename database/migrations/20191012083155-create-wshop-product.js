'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = Sequelize;
    return queryInterface.createTable('wshop_product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      goods_id: {
           type : BIGINT,
        allowNull: false,
      },
      goods_sn: {
        type: STRING(60),
        allowNull: false,
      },
      shop_price: {
        type: DECIMAL(10),
        allowNull: false,
      },
      order_id : {
         type : BIGINT,
         allowNull: false,
      },
      goods_number: {
        type: INTEGER(8).UNSIGNED,
        allowNull: false,
      },
      createdAt: {
        type: DATE,
        allowNull: true
      },
      updatedAt: {
        type: DATE,
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_product');
  }
};