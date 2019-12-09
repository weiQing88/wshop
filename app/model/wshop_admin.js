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
			type: STRING(255),
			allowNull: false,

		},
		password: {
			type: STRING(255),
			allowNull: false,
	
		},
		password_salt: {
			type: STRING(255),
			allowNull: true,
		},
		last_login_ip: {
			type: STRING(60),
			allowNull: true,

		},
		last_login_time: {
			type: INTEGER(11),
			allowNull: true,
		},
		add_time: {
			type: DATE,
			allowNull: true,
		},
		update_time: {
			type: DATE,
			allowNull: true,
		},
		avatar: {
			type: STRING(255),
			allowNull: true,
		},
		admin_role: {
			type: STRING(255),
			allowNull: false
		},
		email : {
			type: STRING(60),
			allowNull: false,
		}
  }, {
	freezeTableName: true,
	timestamps: false,
    tableName: 'wshop_admin'
  });

  
  wshop_admin.associate = function(models) {
    // associations can be defined here
  };

  return wshop_admin;
};
