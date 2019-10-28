'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_food = sequelize.define('wshop_food', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    rating: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		is_featured: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		restaurant_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '\'\''
		},
		month_sales: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		rating_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		tips: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		image_path: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		goods_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		satisfy_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		satisfy_rate: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		activity: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
  }, {
    tableName: 'wshop_food'
  });
  wshop_food.associate = function(models) {
    // associations can be defined here
  };
  return wshop_food;
};