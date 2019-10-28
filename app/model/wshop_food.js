'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_food = app.model.define('wshop_food', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    rating: {
			type: INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		is_featured: {
			type: INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		restaurant_id: {
			type: INTEGER(11),
			allowNull: true
		},
		category_id: {
			type: INTEGER(11),
			allowNull: true
		},
		description: {
			type: STRING(255),
			allowNull: true,
			defaultValue: '\'\''
		},
		month_sales: {
			type: INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		rating_count: {
			type: INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		tips: {
			type: STRING(255),
			allowNull: true
		},
		image_path: {
			type: STRING(255),
			allowNull: true
		},
		goods_id: {
			type: INTEGER(11),
			allowNull: true
		},
		name: {
			type: STRING(255),
			allowNull: true
		},
		satisfy_count: {
			type: INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		satisfy_rate: {
			type: INTEGER(11),
			allowNull: true
		},
		createdAt: {
			type: DATE,
			allowNull: false
		},
		updatedAt: {
			type: DATE,
			allowNull: false
		},
		activity: {
			type: INTEGER(11),
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