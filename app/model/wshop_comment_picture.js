'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_comment_picture = app.model.define('wshop_comment_picture', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:INTEGER
    },
    comment_id: {
			type:INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		pic_url: {
			type:STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		sort_order: {
			type:INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '5'
		},
		createdAt: {
			type:DATE,
			allowNull: false
		},
		updatedAt: {
			type:DATE,
			allowNull: false
		}
  }, {
	freezeTableName: true,
    tableName: 'wshop_comment_picture'
  });
  wshop_comment_picture.associate = function(models) {
    // associations can be defined here
  };
  return wshop_comment_picture;
};