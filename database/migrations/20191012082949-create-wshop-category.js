'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    	name: {
        type: Sequelize.STRING(90),
        allowNull: false,
        defaultValue: '\'\''
      },
      keywords: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\''
      },
      front_desc: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\''
      },
      category_id: {
        type: Sequelize.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
      },
      sort_order: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '50'
      },
      show_index: {
        type: Sequelize.INTEGER(1),
        allowNull: true,
        defaultValue: '0'
      },
      is_show: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '1'
      },
      banner_url: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\''
      },
      icon_url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      img_url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      wap_banner_url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      level: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      type: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      front_name: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      grade: {
        type: Sequelize.INTEGER(4),
        allowNull: true
      },
      filter_attr: {
        type: Sequelize.INTEGER(6),
        allowNull: true
      }


    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_category');
  }
};