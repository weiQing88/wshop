'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_collect', {
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
      goods_id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      add_time: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      is_attention: {
        type: Sequelize.INTEGER(1),
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
    return queryInterface.dropTable('wshop_collect');
  }
};