'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_user = app.model.define('wshop_user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:INTEGER
	},
	user_id: {
		type: STRING(255),
		allowNull: false,
		unique: true
	},
    username: {
			type:STRING(60),
			allowNull: false
		},
		password: {
			type:STRING(32),
			allowNull: true
		},
		gender: {
			type:STRING(255),
			allowNull: false
		},
		birthday: {
			type:INTEGER(11),
			allowNull: true
		},
		register_time: {
			type:DATE,
			allowNull: true
		},
		last_login_time: {
			type:DATE,
			allowNull: false
		},
		last_login_ip: {
			type:STRING(255),
			allowNull: false
		},
		user_level_id: {
			type:STRING(255),
			allowNull: true
		},
		nickname: {
			type:STRING(60),
			allowNull: false
		},
		mobile: {
			type:STRING(20),
			allowNull: true
		},
		register_ip: {
			type:STRING(255),
			allowNull: false
		},
		avatar: {
			type:STRING(255),
			allowNull: false
		},
		weixin_openid: {
			type:STRING(50),
			allowNull: false
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
	tableName: 'wshop_user'
  });
  wshop_user.associate = function() {
	// associations can be defined here
	// foreginKey为对应的信息表中studentId字段
	app.model.WshopUser.hasOne( app.model.WshopOrder, { foreignKey : 'user_id' });
  };
  return wshop_user;
};