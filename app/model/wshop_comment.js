'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_comment = sequelize.define('wshop_comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    comment_id: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		value_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		content: {
			type: DataTypes.STRING(6550),
			allowNull: false
		},
		add_time: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		user_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		new_content: {
			type: DataTypes.STRING(6550),
			allowNull: true,
			defaultValue: '\'\''
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
    tableName: 'wshop_comment'
  });
  wshop_comment.associate = function(models) {
    // associations can be defined here
  };
  return wshop_comment;
};