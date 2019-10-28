'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_collect = sequelize.define('wshop_collect', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		add_time: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		is_attention: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
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
    tableName: 'wshop_collect'
  });
  wshop_collect.associate = function(models) {
    // associations can be defined here
  };
  return wshop_collect;
};