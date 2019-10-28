'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_category = sequelize.define('wshop_category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    name: {
			type: DataTypes.STRING(90),
			allowNull: false,
			defaultValue: '\'\''
		},
		keywords: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		front_desc: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		parent_id: {
			type: DataTypes.INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		sort_order: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '50'
		},
		show_index: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		is_show: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
		banner_url: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		icon_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		img_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		wap_banner_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		level: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		front_name: {
			type: DataTypes.STRING(255),
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
		grade: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		filter_attr: {
			type: DataTypes.INTEGER(6),
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