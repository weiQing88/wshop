'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment_id: {
        type: Sequelize.INTEGER(3).UNSIGNED,
        allowNull: true,
        defaultValue: '0'
      },
      value_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      content: {
        type: Sequelize.STRING(6550),
        allowNull: false
      },
      add_time: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      status: {
        type: Sequelize.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      user_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      new_content: {
        type: Sequelize.STRING(6550),
        allowNull: true,
        defaultValue: '\'\''
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
    return queryInterface.dropTable('wshop_comment');
  }
};