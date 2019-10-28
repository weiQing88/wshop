'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_admin = sequelize.define('wshop_admin', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
   	username: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: '\'\''
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		password_salt: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '\'\''
		},
		last_login_ip: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: '\'\''
		},
		last_login_time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		add_time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		update_time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		avatar: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		admin_role_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
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
    tableName: 'wshop_admin'
  });
  wshop_admin.associate = function(models) {
    // associations can be defined here
  };
  return wshop_admin;
};