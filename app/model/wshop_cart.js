'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_cart = sequelize.define('wshop_cart', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		session_id: {
			type: DataTypes.CHAR(32),
			allowNull: false,
			defaultValue: '\'\''
		},
		goods_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_sn: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: '\'\''
		},
		product_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		goods_name: {
			type: DataTypes.STRING(120),
			allowNull: false,
			defaultValue: '\'\''
		},
		market_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		retail_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		number: {
			type: DataTypes.INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_specifition_name_value: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		goods_specifition_ids: {
			type: DataTypes.STRING(60),
			allowNull: true,
			defaultValue: '\'\''
		},
		checked: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
		list_pic_url: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		rec_type: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		}
  }, {
 tableName: 'wshop_cart'
  });
  wshop_cart.associate = function(models) {
    // associations can be defined here
  };
  return wshop_cart;
};