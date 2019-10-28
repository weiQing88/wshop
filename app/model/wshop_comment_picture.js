'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_comment_picture = sequelize.define('wshop_comment_picture', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    comment_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		pic_url: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		sort_order: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '5'
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
    tableName: 'wshop_comment_picture'
  });
  wshop_comment_picture.associate = function(models) {
    // associations can be defined here
  };
  return wshop_comment_picture;
};