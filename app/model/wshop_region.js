'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_region = sequelize.define('wshop_region',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    parent_id: {
			type: DataTypes.INTEGER(5),
			allowNull: true
		},
		region_name: {
			type: DataTypes.STRING(120),
			allowNull: true
		},
		region_type: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		agency_id: {
			type: DataTypes.INTEGER(5),
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
    tableName: 'wshop_payment'
  });
  wshop_region.associate = function(models) {
    // associations can be defined here
  };
  return wshop_region;
};