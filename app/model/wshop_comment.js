'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_comment = app.model.define('wshop_comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    comment_id: {
			type: INTEGER(3).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		value_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		content: {
			type: STRING(6550),
			allowNull: false
		},
		add_time: {
			type: BIGINT,
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: INTEGER(3).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		user_id: {
			type: INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		new_content: {
			type: STRING(6550),
			allowNull: true,
			defaultValue: '\'\''
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
    tableName: 'wshop_comment'
  });
  wshop_comment.associate = function(models) {
    // associations can be defined here
  };
  return wshop_comment;
};