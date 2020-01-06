'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_wx = app.model.define('wshop_wx', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:INTEGER
	},
	appid: {
	     type:STRING(255),
		 allowNull: false
    },
    appsecret : {
        type:STRING(255),
        allowNull: false
    },
    organization : {
        type:STRING(255),
        allowNull: false
    },
    intro : {
        type:TEXT,
        allowNull: false
    },
      name: {
			type:STRING(60),
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
	tableName: 'wshop_wx'
  });
  wshop_wx.associate = function() {
	// associations can be defined here
	// foreginKey为对应的信息表中studentId字段
  };
  return wshop_wx;
};