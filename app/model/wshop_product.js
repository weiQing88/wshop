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
    goods_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_specification_ids: {
			type: STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		goods_sn: {
			type: STRING(60),
			allowNull: false,
			defaultValue: ''
		},
		goods_number: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		retail_price: {
			type: DECIMAL,
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
		}

  }, {
    tableName: 'wshop_product'
  });
  wshop_product.associate = function(models) {
    // associations can be defined here
  };
  return wshop_product;
};