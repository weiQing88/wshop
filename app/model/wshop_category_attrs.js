'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_category_attrs = app.model.define('wshop_category_attrs', {
      id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
            },
	   	category_id: {
            type: STRING(255),
                  allowNull: false,
                //  primaryKey: true
          },
         attr_id: {
		      	type: STRING(255),
            allowNull: false,
           // primaryKey: true
        },

        createdAt: {
			type: DATE,
			allowNull: true,
		},
		updatedAt: {
			type: DATE,
			allowNull: true
    },
    
  }, {
    freezeTableName: true,
    tableName: 'wshop_category_attrs',
   // timestamps: false,
  });

  wshop_category_attrs.associate = function() {};
  return wshop_category_attrs;
};