'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_payment = sequelize.define('wshop_payment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    pay_code: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		pay_name: {
			type: DataTypes.STRING(120),
			allowNull: false
		},
		pay_fee: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		pay_desc: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		pay_order: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		pay_config: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		enabled: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		is_cod: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		is_online: {
			type: DataTypes.INTEGER(1),
			allowNull: false
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
    tableName: 'wshop_payment'
  });
  wshop_payment.associate = function(models) {
    // associations can be defined here
  };
  return wshop_payment;
};