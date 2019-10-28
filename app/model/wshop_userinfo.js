'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_userinfo = sequelize.define('wshop_userinfo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    avatar: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		balance: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		brand_member_new: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		current_address_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		current_invoice_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		delivery_card_expire_days: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		gift_amount: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		registe_time: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		is_active: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		is_email_valid: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		is_mobile_valid: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		mobile: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		point: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		username: {
			type: DataTypes.STRING(255),
			allowNull: true
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
    tableName: 'wshop_userinfo'
  });
  wshop_userinfo.associate = function(models) {
    // associations can be defined here
  };
  return wshop_userinfo;
};