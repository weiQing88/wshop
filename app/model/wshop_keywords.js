'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_keywords = app.model.define('wshop_keywords', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    is_hot: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		is_default: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		is_show: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
		sort_order: {
			type: INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '100'
		},
		id: {
			type: INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		type: {
			type: INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
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
    tableName: 'wshop_keywords'
  });
  wshop_keywords.associate = function(models) {
    // associations can be defined here
  };
  return wshop_keywords;
};