'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_address = app.model.define('wshop_address', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    name: {
      type: STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    user_id: {
      type: INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    country: {
      type: INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    province: {
      type: INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    city: {
      type: INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    district: {
      type: INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    address: {
      type: STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    mobile: {
      type: STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    createdAt: {
      type: DATE,
      allowNull: false
    },
    updatedAt: {
      type: DATE,
      allowNull: false
    },
    sign_building: {
      type: STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'wshop_address'
  });

  wshop_address.associate = function(models) {
    // associations can be defined here

  };
  return wshop_address;
};