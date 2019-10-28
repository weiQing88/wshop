'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wshop_goods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
         comment : '-',
      },
      category_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      goods_sn: {
        type: Sequelize.STRING(60),
        allowNull: true,
        defaultValue: '\'\'',
         comment : '-',
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull: false,
        defaultValue: '\'\'',
         comment : '-',
      },
      brand_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: true,
        defaultValue: '0',
         comment : '-',
      },
      goods_number: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      keywords: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\'',
         comment : '-',
      },
      goods_brief: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '\'\'',
         comment : '-',
      },
      goods_desc: {
        type: Sequelize.TEXT,
        allowNull: true,
         comment : '-',
      },
      is_on_sale: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '1',
         comment : '-',
      },
      add_time: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      sort_order: {
        type: Sequelize.INTEGER(4).UNSIGNED,
        allowNull: true,
        defaultValue: '100',
         comment : '-',
      },
      is_delete: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      attribute_category: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: true,
        defaultValue: '0',
         comment : '-',
      },
      counter_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      extra_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      is_new: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      retail_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      market_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      promotion_desc: {
        type: Sequelize.STRING(255),
        allowNull: false,
         comment : '-',
      },
      promote_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
         comment : '-',
      },
      is_hot: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
         comment : '-',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
       
      },
      is_promote: {
        type: Sequelize.INTEGER(1),
        allowNull: true,
         comment : '-',
      },
      promote_start_date: {
        type: Sequelize.DATE,
        allowNull: true,
         comment : '-',
      },
      promote_end_date: {
        type: Sequelize.DATE,
        allowNull: true,
         comment : '-',
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_goods');
  }
};