'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_order = sequelize.define('wshop_order',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_sn: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		user_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		order_status: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		shipping_status: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		pay_status: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		consignee: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: ''
		},
		country: {
			type: DataTypes.INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		province: {
			type: DataTypes.INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		city: {
			type: DataTypes.INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		district: {
			type: DataTypes.INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		mobile: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: ''
		},
		postscript: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		shipping_fee: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		pay_name: {
			type: DataTypes.STRING(120),
			allowNull: false,
			defaultValue: ''
		},
		pay_id: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: '0'
		},
		actual_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		integral: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		integral_money: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		order_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		goods_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		add_time: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		confirm_time: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		pay_time: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		freight_price: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		coupon_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		parent_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		coupon_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		callback_status: {
			type: DataTypes.ENUM('true','false'),
			allowNull: true,
			defaultValue: 'true'
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
    tableName: 'wshop_order'
  });
  wshop_order.associate = function(models) {
    // associations can be defined here
  };
  return wshop_order;
};