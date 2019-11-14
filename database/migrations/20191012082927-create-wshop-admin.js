'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_adminx', {
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

      mobile : {
        type: Sequelize.STRING(60),
        allowNull: false,
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
        allowNull: true,
        defaultValue: '\'\''
      },
      last_login_time: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0'
      },
      add_time: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0'
      },
      update_time: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0'
      },
      avatar: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\''
      },
      email : {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      admin_role: {
        type: Sequelize.TEXT,
        allowNull: false
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