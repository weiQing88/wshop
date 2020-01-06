'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_role = app.model.define('wshop_role', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:INTEGER
	},
	name: {
		type: STRING(150),
		allowNull: false,
	},
     authorities : {
        type: STRING(255),
		allowNull: true
     },
	createdAt: {
			type:DATE,
			allowNull: true
		},
		updatedAt: {
			type:DATE,
			allowNull: true
		}
  }, {
	freezeTableName: true,
	tableName: 'wshop_role'
  });
  wshop_role.associate = function() {
	// associations can be defined here
  };
  return wshop_role;
};