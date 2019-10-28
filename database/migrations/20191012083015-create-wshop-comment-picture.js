'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_comment_picture', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    	comment_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      pic_url: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\''
      },
      sort_order: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '5'
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
    return queryInterface.dropTable('wshop_comment_picture');
  }
};