'use strict';
module.exports = app => {
	
  const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;

  const wshop_admin = app.model.define('wshop_admin', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
	},
	user_id : {
	    type: STRING(10),
		allowNull: false,
	},

	mobile : {
		type: STRING(60),
		allowNull: false,
	},
     	username: {
			type: STRING(10),
			allowNull: false,
			defaultValue: '\'\''
		},
		password: {
			type: STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		password_salt: {
			type: STRING(255),
			allowNull: true,
		},
		last_login_ip: {
			type: STRING(60),
			allowNull: true,
			defaultValue: '\'\''
		},
		last_login_time: {
			type: INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		add_time: {
			type: INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		update_time: {
			type: INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		avatar: {
			type: STRING(255),
			allowNull: false,
			defaultValue: '\'\''
		},
		admin_role: {
			type: TEXT,
			allowNull: false
		},
		email : {
			type: STRING(60),
			allowNull: false,
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
    tableName: 'wshop_admin'
  });

  
  wshop_admin.associate = function(models) {
    // associations can be defined here
  };

  return wshop_admin;
};
