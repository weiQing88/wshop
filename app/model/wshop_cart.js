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
	     	type:STRING(255),
			allowNull: false,
			defaultValue: '0'
		},
	
		goods_id: {
			//type:INTEGER(8).UNSIGNED,
			type:STRING(255),
			allowNull: false,
		},
		goods_sn: {
			type:STRING(60),
			allowNull: true,
		},
		expired : {
			type:STRING(160),
			allowNull: false,
		},
		goods_name: {
			type:STRING(120),
			allowNull: false,
		},
		market_price: {
			type:DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		shop_price: {
			type:DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		goods_number : {
			type:INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		number: {
			type:INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		list_pic_url: {
			type:STRING(255),
			allowNull: false,
		},
		goods_attrs: {
			type:STRING(255),
			allowNull: true,
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
	 freezeTableName: true,
     tableName: 'wshop_cart'
  });
  wshop_cart.associate = function(models) {
	// associations can be defined here
  };
  return wshop_cart;
};