'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_goods = app.model.define('wshop_goods', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    category_id: {
	     	type: STRING(255),
			allowNull: false,
		},
	 goods_id: {
	     	type: STRING(255),
			allowNull: false,
		},
		goods_sn: {
			type: STRING(60),
			allowNull: true,
		},
		name: {
			type: STRING(120),
			allowNull: false,
		},
		brand_id: {
			type: INTEGER(11).UNSIGNED,
			allowNull: true,
		},
		goods_number: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
		},
		keywords: {
			type: STRING(255),
			allowNull: true,
		},
		goods_brief: {
			type: STRING(255),
			allowNull: true,
		},
		goods_desc: {
			type: TEXT,
			allowNull: true
		},
		is_on_sale: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
		add_time: {
			type: DATE,
			allowNull: true,
		},
		sort_order: {
			type: INTEGER(4).UNSIGNED,
			allowNull: true,
		},
		is_delete: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		attribute_category: {
			type: INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		counter_price: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		extra_price: {
			type: DECIMAL,
			allowNull: true,
			defaultValue: '0'
		},
		is_new: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		retail_price: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		market_price: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		promotion_desc: {
			type: STRING(255),
			allowNull: true
		},
		promote_price: {
			type: DECIMAL,
			allowNull: true
		},
		is_hot: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		createdAt: {
			type: DATE,
			allowNull: false
		},
		updatedAt: {
			type: DATE,
			allowNull: false
		},
		is_promote: {
			type: INTEGER(1),
			allowNull: true
		},
		promote_start_date: {
			type: DATE,
			allowNull: true
		},
		promote_end_date: {
			type: DATE,
			allowNull: true
		}
  }, {
    tableName: 'wshop_goods'
  });
  wshop_goods.associate = function(models) {
    // associations can be defined here
  };
  return wshop_goods;
};