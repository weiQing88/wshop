'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = Sequelize;
    return queryInterface.createTable('wshop_category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
  
      category_name: {
        type: STRING(90),
        allowNull: false,
      },
      keywords: {
        type: STRING(255),
        allowNull: true,
      },
      front_desc: {
        type: STRING(255),
        allowNull: true,
      },
      category_id: {
        type: STRING(255),
        allowNull: false,
      },
      category_sort: {
        type: INTEGER(1).UNSIGNED,
        allowNull: true,
      
      },
      show_index: {
        type: INTEGER(1),
        allowNull: true,
      },
      is_show: {
        type: INTEGER(1).UNSIGNED,
        allowNull: true,
      },
      banner_url: {
        type: STRING(255),
        allowNull: true,
      },
      category_icon: {
        type: STRING(255),
        allowNull: true,
      },
      img_url: {
        type: STRING(255),
        allowNull: true,
      },
      wap_banner_url: {
        type: STRING(255),
        allowNull: true,
      },
      level: {
        type: STRING(255),
        allowNull: true,
      },
      category_type: {
        type: INTEGER(11),
        allowNull: true,
      },
      front_name: {
        type: STRING(255),
        allowNull: true,
      },
      createdAt: {
        type: DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DATE,
        allowNull: true
      },
      grade: {
        type: INTEGER(4),
        allowNull: true
      },
      category_attrs: {
        type: TEXT,
        allowNull: true
      }
  

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_category');
  }
};