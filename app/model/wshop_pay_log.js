'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_pay_log = app.model.define('wshop_pay_log', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    order_id: {
			type: INTEGER(8),
			allowNull: false
		},
		order_amount: {
			type: DECIMAL,
			allowNull: false
		},
		order_type: {
			type: INTEGER(1),
			allowNull: false
		},
		is_paid: {
			type: INTEGER(1),
			allowNull: false
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
	freezeTableName: true,
    tableName: 'wshop_pay_log'
  });
  wshop_pay_log.associate = function(models) {
    // associations can be defined here
  };
  return wshop_pay_log;
};