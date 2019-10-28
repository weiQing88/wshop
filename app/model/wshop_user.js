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
    username: {
			type:STRING(60),
			allowNull: false
		},
		password: {
			type:STRING(32),
			allowNull: false
		},
		gender: {
			type:STRING(255),
			allowNull: false
		},
		birthday: {
			type:INTEGER(11),
			allowNull: false
		},
		register_time: {
			type:DATE,
			allowNull: false
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
			allowNull: false
		},
		nickname: {
			type:STRING(60),
			allowNull: false
		},
		mobile: {
			type:STRING(20),
			allowNull: false
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
			allowNull: true
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
    tableName: 'wshop_user'
  });
  wshop_user.associate = function(models) {
    // associations can be defined here
  };
  return wshop_user;
};