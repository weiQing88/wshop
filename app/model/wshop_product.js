'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_product = app.model.define('wshop_product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
	},
	user_id : {
		type : BIGINT,
		allowNull: false,
	},
	goods_name : {
		type: STRING(255),
		allowNull: false,
	},
    goods_id: {
	       type : BIGINT,
			allowNull: false,
		},
		goods_sn: {
			type: STRING(60),
			allowNull: false,
		},
		shop_price: {
			type: DECIMAL(10),
			allowNull: false,
		},
		order_id : {
			type: STRING(255),
			 allowNull: false,
		},
		goods_number: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
		},
		shipping_status : {
			type: INTEGER(1).UNSIGNED,
			allowNull: true,
		},
		order_uid : {
			type: STRING(255),
			allowNull: false,
		},
		createdAt: {
			type: DATE,
			allowNull: true
		},
		updatedAt: {
			type: DATE,
			allowNull: true
		}

  }, {
	freezeTableName: true,
    tableName: 'wshop_product'
  });
  wshop_product.associate = function(models) {
	 // associations can be defined here
	 app.model.WshopProduct.belongsTo( app.model.WshopOrder, { foreignKey : 'order_id', targetKey : 'order_id' });
  };
  return wshop_product;
};