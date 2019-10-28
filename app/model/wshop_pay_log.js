'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_pay_log = sequelize.define('wshop_pay_log', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_id: {
			type: DataTypes.INTEGER(8),
			allowNull: false
		},
		order_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		order_type: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		is_paid: {
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
    tableName: 'wshop_pay_log'
  });
  wshop_pay_log.associate = function(models) {
    // associations can be defined here
  };
  return wshop_pay_log;
};