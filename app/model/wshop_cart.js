'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_cart = app.model.define('wshop_cart', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:INTEGER
    },
    user_id: {
			type:INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		session_id: {
			type:CHAR(32),
			allowNull: false,
			defaultValue: '\'\''
		},
		goods_id: {
			type:INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_sn: {
			type:STRING(60),
			allowNull: false,
			defaultValue: '\'\''
		},
		product_id: {
			type:INTEGER(8).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		goods_name: {
			type:STRING(120),
			allowNull: false,
			defaultValue: '\'\''
		},
		market_price: {
			type:DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		retail_price: {
			type:DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		number: {
			type:INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_specifition_name_value: {
			type:TEXT,
			allowNull: true
		},
		goods_specifition_ids: {
			type:STRING(60),
			allowNull: true,
			defaultValue: '\'\''
		},
		checked: {
			type:INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
		list_pic_url: {
			type:STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		createdAt: {
			type:DATE,
			allowNull: false
		},
		updatedAt: {
			type:DATE,
			allowNull: false
		},
		rec_type: {
			type:INTEGER(1),
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