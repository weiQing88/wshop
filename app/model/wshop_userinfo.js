'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_userinfo = app.model.define('wshop_userinfo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:INTEGER
    },
    avatar: {
			type:STRING(255),
			allowNull: true
		},
		balance: {
			type:INTEGER(11),
			allowNull: true
		},
		brand_member_new: {
			type:INTEGER(11),
			allowNull: true
		},
		current_address_id: {
			type:INTEGER(11),
			allowNull: true
		},
		current_invoice_id: {
			type:INTEGER(11),
			allowNull: true
		},
		delivery_card_expire_days: {
			type:INTEGER(11),
			allowNull: true
		},
		email: {
			type:STRING(255),
			allowNull: true
		},
		gift_amount: {
			type:INTEGER(11),
			allowNull: true
		},
		city: {
			type:STRING(255),
			allowNull: true
		},
		registe_time: {
			type:STRING(255),
			allowNull: true
		},
		user_id: {
			type:INTEGER(11),
			allowNull: true
		},
		is_active: {
			type:INTEGER(11),
			allowNull: true
		},
		is_email_valid: {
			type:INTEGER(1),
			allowNull: true
		},
		is_mobile_valid: {
			type:INTEGER(1),
			allowNull: true
		},
		mobile: {
			type:STRING(255),
			allowNull: true
		},
		point: {
			type:INTEGER(11),
			allowNull: true
		},
		username: {
			type:STRING(255),
			allowNull: true
		},
		createdAt: {
			type:DATE,
			allowNull: false
		},
		updatedAt: {
			type:DATE,
			allowNull: false
		}
  }, {
	freezeTableName: true,
    tableName: 'wshop_userinfo'
  });
  wshop_userinfo.associate = function(models) {
    // associations can be defined here
  };
  return wshop_userinfo;
};