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
	order_id : {
		 type : BIGINT,
		 allowNull: false,
		 unique: true
	},
    order_sn: {
			type: STRING(20),
			allowNull: true,
			defaultValue: '',
			//unique: true
		},
		user_id: {
			type: STRING(60),
			allowNull: false,
			//unique: true
		},
		zipcode : {
			type: STRING(60),
			allowNull: true,
		},

		money_paid : {
			type: DECIMAL,
			allowNull: true,
		},

		order_status: {
			type: INTEGER(1).UNSIGNED,
			allowNull: true,
		},
		shipping_status: {
			type: INTEGER(1).UNSIGNED,
			allowNull: true,
		},
		pay_status: {
			type: INTEGER(1).UNSIGNED,
			allowNull: true,
		},
		consignee: {
			type: STRING(60),
			allowNull: true,
		},
		country: {
			type: STRING(255),
			allowNull: true,
		},
		province: {
			type: STRING(255),
			allowNull: true,
		},
		city: {
			type: STRING(255),
			allowNull: true,
		},
		district: {
			type: STRING(255),
			allowNull: true,
		},
		address: {
			type: STRING(255),
			allowNull: true,
			// defaultValue: ''
		},
		mobile: {
			type: STRING(60),
			allowNull: true,
		},
		postscript: {
			type: STRING(255),
			allowNull: true,
		},
		shipping_fee: {
			type: DECIMAL,
			allowNull: true,
		},
		pay_name: {
			type: STRING(120),
			allowNull: true,
		},
		pay_id: {
			type: INTEGER(3),
			allowNull: true,
		},
		actual_price: {
			type: DECIMAL,
			allowNull: true,
		},
		integral: {
			type: INTEGER(10).UNSIGNED,
			allowNull: true,
		},
		integral_money: {
			type: DECIMAL,
			allowNull: true,
		},
		order_price: {
			type: DECIMAL,
			allowNull: false,
		},
		add_time: {
			type: DATE,
			allowNull: true,
		},
		end_time: {
			type: DATE,
			allowNull: true,
		},
		confirm_time: {
			type: DATE,
			allowNull: true,

		},
		pay_time: {
			 type: DATE,
			 allowNull: true,
		},
		freight_price: {
			type: INTEGER(10).UNSIGNED,
			allowNull: true,
		},
		coupon_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: true,
		},
		parent_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: true,
		},
		coupon_price: {
			type: DECIMAL,
			allowNull: true,
			//defaultValue: '0'
		},
		order_channel : {
			type: STRING(20),
			allowNull: true,
		},
		order_type : {
			type: INTEGER(3),
			allowNull: true,
		},

		delivery_type : {
			type: INTEGER(3),
			allowNull: false,
		},

		logistic_code : {
			type: STRING(255),
			allowNull: true,
		},

		shipper_code : {
			type: STRING(255),
			allowNull: true,
		},

		note : {
			type: STRING(255),
			allowNull: true,
		},
		// cancelled_code : {
		// 	type: STRING(255),
		// 	allowNull: true,  
		// },
		// callback_status: {
		//   	 type: ENUM('true','false'),
		// 	 allowNull: true,
		//     defaultValue: 'true'
		// },
		createdAt: {
			type: DATE,
			allowNull: false
		},
		updatedAt: {
			type: DATE,
			allowNull: false
		}
  }, {
	freezeTableName: true,
    tableName: 'wshop_order'
  });
  wshop_order.associate = function() {

	   app.model.WshopOrder.belongsTo( app.model.WshopUser, { foreignKey : 'user_id', targetKey : 'user_id' });
		/**
		 *  指定 ‘foreignKey’ 代替默认的 ‘id’，值则取之于 ‘ sourceKey ’指定的 ‘order_id’
		 */
	   app.model.WshopOrder.hasMany( app.model.WshopProduct , {  foreignKey : 'order_id', sourceKey : 'order_id' });

	   app.model.WshopOrder.hasMany( app.model.WshopOrderGoods , {  foreignKey : 'order_id' , sourceKey : 'order_id' , as : 'goods' });


  };
  return wshop_order;
};