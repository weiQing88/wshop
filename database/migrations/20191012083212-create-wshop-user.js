'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
         comment : '-',
      },
      username: {
        type: Sequelize.STRING(60),
        allowNull: false,
         comment : '-',
      },
      password: {
        type: Sequelize.STRING(32),
        allowNull: false,
         comment : '-',
      },
      gender: {
        type: Sequelize.STRING(255),
        allowNull: false,
         comment : '-',
      },
      birthday: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
         comment : '-',
      },
      register_time: {
        type: Sequelize.DATE,
        allowNull: false,
         comment : '-',
      },
      last_login_time: {
        type: Sequelize.DATE,
        allowNull: false,
         comment : '-',
      },
      last_login_ip: {
        type: Sequelize.STRING(255),
        allowNull: false,
         comment : '-',
      },
      user_level_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
         comment : '-',
      },
      nickname: {
        type: Sequelize.STRING(60),
        allowNull: false,
         comment : '-',
      },
      mobile: {
        type: Sequelize.STRING(20),
        allowNull: false,
         comment : '-',
      },
      register_ip: {
        type: Sequelize.STRING(255),
        allowNull: false,
         comment : '-',
      },
      avatar: {
        type: Sequelize.STRING(255),
        allowNull: false,
         comment : '-',
      },
      weixin_openid: {
        type: Sequelize.STRING(50),
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
    return queryInterface.dropTable('wshop_user');
  }
};