'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_region = app.model.define('wshop_region',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    parent_id: {
			type: INTEGER(5),
			allowNull: true
		},
		region_name: {
			type: STRING(120),
			allowNull: true
		},
		region_type: {
			type: INTEGER(1),
			allowNull: true
		},
		agency_id: {
			type: INTEGER(5),
			allowNull: true
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
    tableName: 'wshop_payment'
  });
  wshop_region.associate = function(models) {
    // associations can be defined here
  };
  return wshop_region;
};