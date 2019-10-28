'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_userinfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment : '-',
      },
      avatar: {
        type: Sequelize.STRING(255),
        allowNull: true,
         comment : '-',
      },
      balance: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      brand_member_new: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      current_address_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      current_invoice_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      delivery_card_expire_days: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: true,
         comment : '-',
      },
      gift_amount: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: true,
         comment : '-',
      },
      registe_time: {
        type: Sequelize.STRING(255),
        allowNull: true,
         comment : '-',
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      is_active: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      is_email_valid: {
        type: Sequelize.INTEGER(1),
        allowNull: true,
         comment : '-',
      },
      is_mobile_valid: {
        type: Sequelize.INTEGER(1),
        allowNull: true,
         comment : '-',
      },
      mobile: {
        type: Sequelize.STRING(255),
        allowNull: true,
         comment : '-',
      },
      point: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      username: {
        type: Sequelize.STRING(255),
        allowNull: true,
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
    return queryInterface.dropTable('wshop_userinfo');
  }
};