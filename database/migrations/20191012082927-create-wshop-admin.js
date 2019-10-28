'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_admin', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: '\'\''
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\''
      },
      password_salt: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: '\'\''
      },
      last_login_ip: {
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: '\'\''
      },
      last_login_time: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      add_time: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      update_time: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      avatar: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\''
      },
      admin_role_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
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
    return queryInterface.dropTable('wshop_admin');
  }
};