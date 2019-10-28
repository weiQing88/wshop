'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_product = sequelize.define('wshop_product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    goods_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_specification_ids: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		goods_sn: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: ''
		},
		goods_number: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		retail_price: {
			type: DataTypes.DECIMAL,
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
		}

  }, {
    tableName: 'wshop_product'
  });
  wshop_product.associate = function(models) {
    // associations can be defined here
  };
  return wshop_product;
};