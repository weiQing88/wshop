'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_user = sequelize.define('wshop_user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		gender: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		birthday: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		register_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_login_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_login_ip: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		user_level_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		nickname: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		mobile: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		register_ip: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		avatar: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		weixin_openid: {
			type: DataTypes.STRING(50),
			allowNull: true
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
    tableName: 'wshop_user'
  });
  wshop_user.associate = function(models) {
    // associations can be defined here
  };
  return wshop_user;
};