'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, ENUM, TEXT, BIGINT } = app.Sequelize;
  const wshop_order = app.model.define('wshop_order',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    order_sn: {
			type: STRING(20),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		user_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		order_status: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		shipping_status: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		pay_status: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		consignee: {
			type: STRING(60),
			allowNull: false,
			defaultValue: ''
		},
		country: {
			type: INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		province: {
			type: INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		city: {
			type: INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		district: {
			type: INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		address: {
			type: STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		mobile: {
			type: STRING(60),
			allowNull: false,
			defaultValue: ''
		},
		postscript: {
			type: STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		shipping_fee: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		pay_name: {
			type: STRING(120),
			allowNull: false,
			defaultValue: ''
		},
		pay_id: {
			type: INTEGER(3),
			allowNull: false,
			defaultValue: '0'
		},
		actual_price: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		integral: {
			type: INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		integral_money: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		order_price: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		goods_price: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		add_time: {
			type: INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		confirm_time: {
			type: INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		pay_time: {
			type: INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		freight_price: {
			type: INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		coupon_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		parent_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		coupon_price: {
			type: DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		callback_status: {
			type: ENUM('true','false'),
			allowNull: true,
			defaultValue: 'true'
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
    tableName: 'wshop_order'
  });
  wshop_order.associate = function(models) {
    // associations can be defined here
  };
  return wshop_order;
};