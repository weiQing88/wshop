'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_collect = app.model.define('wshop_collect', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    user_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		goods_id: {
			type: INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		add_time: {
			type: INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		is_attention: {
			type: INTEGER(1),
			allowNull: false,
			defaultValue: '0'
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
    tableName: 'wshop_collect'
  });
  wshop_collect.associate = function(models) {
    // associations can be defined here
  };
  return wshop_collect;
};