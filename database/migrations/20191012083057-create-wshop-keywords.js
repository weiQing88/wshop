'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_keywords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
         comment : '-',
      },
    	is_hot: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      is_default: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      is_show: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '1',
         comment : '-',
      },
      sort_order: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '100',
         comment : '-',
      },
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
         comment : '-',
      },
      type: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
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
    return queryInterface.dropTable('wshop_keywords');
  }
};