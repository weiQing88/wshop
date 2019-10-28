'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_category = app.model.define('wshop_category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },

    name: {
			type: STRING(90),
			allowNull: false,
			defaultValue: '\'\''
		},
		keywords: {
			type: STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		front_desc: {
			type: STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		parent_id: {
			type: INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		sort_order: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '50'
		},
		show_index: {
			type: INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		is_show: {
			type: INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
		banner_url: {
			type: STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		icon_url: {
			type: STRING(255),
			allowNull: false
		},
		img_url: {
			type: STRING(255),
			allowNull: false
		},
		wap_banner_url: {
			type: STRING(255),
			allowNull: false
		},
		level: {
			type: STRING(255),
			allowNull: false
		},
		type: {
			type: INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		front_name: {
			type: STRING(255),
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
		grade: {
			type: INTEGER(4),
			allowNull: true
		},
		filter_attr: {
			type: INTEGER(6),
			allowNull: true
		}

  }, {
    tableName: 'wshop_category'
  });
  wshop_category.associate = function(models) {
    // associations can be defined here
  };
  return wshop_category;
};