'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_region', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
         comment : '-',
      },
    	parent_id: {
        type: Sequelize.INTEGER(5),
        allowNull: true,
         comment : '-',
      },
      region_name: {
        type: Sequelize.STRING(120),
        allowNull: true,
         comment : '-',
      },
      region_type: {
        type: Sequelize.INTEGER(1),
        allowNull: true,
         comment : '-',
      },
      agency_id: {
        type: Sequelize.INTEGER(5),
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
    return queryInterface.dropTable('wshop_region');
  }
};