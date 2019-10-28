'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
         comment : '-',
      },
    	order_sn: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: '',
        unique: true,
         comment : '-',
      },
      user_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      order_status: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      shipping_status: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      pay_status: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      consignee: {
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: '',
         comment : '-',
      },
      country: {
        type: Sequelize.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      province: {
        type: Sequelize.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      city: {
        type: Sequelize.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      district: {
        type: Sequelize.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '',
         comment : '-',
      },
      mobile: {
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: '',
         comment : '-',
      },
      postscript: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '',
         comment : '-',
      },
      shipping_fee: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      pay_name: {
        type: Sequelize.STRING(120),
        allowNull: false,
        defaultValue: '',
         comment : '-',
      },
      pay_id: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      actual_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      integral: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      integral_money: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      order_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      goods_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      add_time: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      confirm_time: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      pay_time: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      freight_price: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      coupon_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      parent_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      coupon_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      callback_status: {
        type: Sequelize.ENUM('true','false'),
        allowNull: true,
        defaultValue: 'true',
         comment : '-',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_order');
  }
};