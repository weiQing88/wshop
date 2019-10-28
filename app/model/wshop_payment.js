'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_payment = app.model.define('wshop_payment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    pay_code: {
			type: STRING(20),
			allowNull: false
		},
		pay_name: {
			type: STRING(120),
			allowNull: false
		},
		pay_fee: {
			type: STRING(10),
			allowNull: false
		},
		pay_desc: {
			type: TEXT,
			allowNull: false
		},
		pay_order: {
			type: INTEGER(3),
			allowNull: true
		},
		pay_config: {
			type: TEXT,
			allowNull: true
		},
		enabled: {
			type: INTEGER(1),
			allowNull: false
		},
		is_cod: {
			type: INTEGER(1),
			allowNull: false
		},
		is_online: {
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
    tableName: 'wshop_payment'
  });
  wshop_payment.associate = function(models) {
    // associations can be defined here
  };
  return wshop_payment;
};