'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
         comment : '-',
      },
      rating: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
         comment : '-',
      },
      is_featured: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
         comment : '-',
      },
      restaurant_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: '\'\'',
         comment : '-',
      },
      month_sales: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
         comment : '-',
      },
      rating_count: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
         comment : '-',
      },
      tips: {
        type: Sequelize.STRING(255),
        allowNull: true,
         comment : '-',
      },
      image_path: {
        type: Sequelize.STRING(255),
        allowNull: true,
         comment : '-',
      },
      goods_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true,
         comment : '-',
      },
      satisfy_count: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
         comment : '-',
      },
      satisfy_rate: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      activity: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
         comment : '-',
      }
   
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_food');
  }
};