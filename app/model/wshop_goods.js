'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_goods = sequelize.define('wshop_goods', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    category_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_sn: {
			type: DataTypes.STRING(60),
			allowNull: true,
			defaultValue: '\'\''
		},
		name: {
			type: DataTypes.STRING(120),
			allowNull: false,
			defaultValue: '\'\''
		},
		brand_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		goods_number: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		keywords: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		goods_brief: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		goods_desc: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		is_on_sale: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
		add_time: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		sort_order: {
			type: DataTypes.INTEGER(4).UNSIGNED,
			allowNull: true,
			defaultValue: '100'
		},
		is_delete: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		attribute_category: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		counter_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		extra_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		is_new: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		retail_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		market_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		promotion_desc: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		promote_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		is_hot: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		is_promote: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		promote_start_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		promote_end_date: {
			type: DataTypes.DATE,
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